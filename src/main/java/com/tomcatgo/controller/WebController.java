package com.tomcatgo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebController {

    @GetMapping(value="/")
    public String init(){
        return "index";
    }

    @GetMapping(value="/court_travel")
    public String init2(){
        return "court_travel";
    }


    @GetMapping(value="/comfortable")
    public String init3(){
        return "comfortable";
    }
    @GetMapping(value="/news")
    public String init4(){
        return "news";
    }
    @GetMapping(value="/feedback")
    public String init5(){
        return "feedback";
    }
    @GetMapping(value="/contact")
    public String init6(){
        return "contact";
    }
    @GetMapping(value="/scenic_overview")
    public String init7(){
        return "scenic_overview";
    }

}
