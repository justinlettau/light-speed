import slugify from '@sindresorhus/slugify';
import chalk from 'chalk';
import filenamify from 'filenamify';
import { markdownTable } from 'markdown-table';
import fs from 'node:fs';
import { EOL } from 'node:os';
import { performance } from 'node:perf_hooks';
import bytes from 'pretty-bytes';
import ms from 'pretty-ms';
import si from 'systeminformation';

export async function describe(info, describeFn) {
  console.log(`Running ${chalk.green(info.name)} ...`);

  const cpu = await si.cpu();
  const mem = await si.mem();
  const results = [];

  info.variants.forEach((v) => {
    console.log(`- ${chalk.blue(v.name)}`);

    const testResults = [];
    const test = (testName, testFn) => {
      const start = performance.now();

      testFn();

      const end = performance.now();
      const totalTime = end - start;

      testResults.push({
        testName,
        totalTime,
      });
    };

    describeFn(test, v);

    results.push({
      title: v.name,
      testResults,
    });
  });

  let report = `# ${info.name}`;
  report += EOL;
  report += EOL;

  // system info
  report += `- CPU: ${cpu.manufacturer} ${cpu.brand}`;
  report += EOL;
  report += `- Memory: ${bytes(mem.total)}`;
  report += EOL;
  report += `- Node: ${process.version}`;
  report += EOL;

  results.forEach(async (item) => {
    report += EOL;
    report += `## ${item.title}`;
    report += EOL;
    report += EOL;

    report += markdownTable(
      [
        ['Test', 'Execution Time'],
        ...item.testResults
          .sort((a, b) => a.totalTime - b.totalTime)
          .map((result) => [
            result.testName,
            ms(result.totalTime, {
              millisecondsDecimalDigits: 4,
            }),
          ]),
      ],
      {
        align: ['l', 'r'],
      }
    );

    report += EOL;
  });

  const file = `../reports/${slugify(filenamify(info.name))}.md`;
  const dest = new URL(file, import.meta.url);
  fs.writeFileSync(dest, report);

  console.log(chalk.green('Done!'));
}
