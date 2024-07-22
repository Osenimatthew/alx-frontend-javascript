export default function createIteratorObject(report) {
  function* employeeIterator() {
    for (const department in report.allEmployees) {
      yield* report.allEmployees[department];
    }
  }

  return employeeIterator();
}
