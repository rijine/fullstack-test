package com.example.entitlements.controller;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/employee")
public class EmployeeController {
//    @Autowired
//    private EmployeeRepository repository;
//    private EntitlementsRepository repositoryE;
//
//    @PostMapping("/save")
//    public String saveEmployee(@RequestBody Employee employee) {
//        repository.save(employee);
//        return "Employee saved..";
//    }
//
////    @PostMapping("/save")
////    public String saveEmployee(@RequestBody Entitlement entitlement) {
//////        repositoryE.save(entitlement);
////        return "Employee saved..";
////    }
//
//    @GetMapping("/all")
//    public List<Employee> getAll() {
//        return repository.findAll();
//    }
//
//    @GetMapping("/dept/{dept}")
//    public List<Employee> getEmployeesByDept(@PathVariable String dept) {
//        return repository.findByDept(dept);
//    }

}