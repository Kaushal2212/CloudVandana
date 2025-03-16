package emp;

import java.util.ArrayList;
import java.util.List;

public class AddEmployee {
    private List<Employee> employees;

    public AddEmployee() {
        employees = new ArrayList<>();
    }

    public void addEmployee(Employee emp) {
        employees.add(emp);
    }

    public void displayAllEmployees() {
        System.out.println("Employee Details:");
        for (Employee emp : employees) {
            emp.displayDetails();
        }
    }
}

