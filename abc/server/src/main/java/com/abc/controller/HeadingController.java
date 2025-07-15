package com.abc.controller;

import com.abc.model.Heading;
import com.abc.repository.HeadingRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class HeadingController {

    private final HeadingRepository headingRepository;

    public HeadingController(HeadingRepository headingRepository) {
        this.headingRepository = headingRepository;
    }

    @PostMapping("/heading")
    public Heading saveHeading(@RequestBody Map<String, String> body) {
        String text = body.get("heading");
        Heading heading = new Heading();
        heading.setHeading(text);
        return headingRepository.save(heading);
    }

    @GetMapping("/heading")
    public Map<String, String> getHeading() {
        List<Heading> all = headingRepository.findAll();
        String lastHeading = all.isEmpty() ? "Welcome to ABC Company" : all.get(all.size() - 1).getHeading();
        return Map.of("heading", lastHeading);
    }
}
