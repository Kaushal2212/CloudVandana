package emp;

public class GetEmployee {

	public static void main(String[] args) {
		// Create AddEmployee object
        AddEmployee addEmp = new AddEmployee();

        // Creating Employee objects
        Employee emp1 = new Employee(101, "John Doe", 50000);
        Employee emp2 = new Employee(102, "Jane Smith", 60000);
        Employee emp3 = new Employee(103, "Alice Johnson", 55000);

        // Adding employees to the service
        addEmp.addEmployee(emp1);
        addEmp.addEmployee(emp2);
        addEmp.addEmployee(emp3);

        // Display all employees
        addEmp.displayAllEmployees();
	}

}
