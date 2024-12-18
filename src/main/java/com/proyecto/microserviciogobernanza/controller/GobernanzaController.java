package com.proyecto.microserviciogobernanza.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/gobernanza")
public class GobernanzaController {

    private List<Partido> partidos;

    public GobernanzaController() {
        partidos = new ArrayList<>();
        partidos.add(new Partido("Partido A"));
        partidos.add(new Partido("Partido B"));
        partidos.add(new Partido("Partido C"));
        partidos.add(new Partido("Partido D"));
    }

    @GetMapping
    public String obtenerGobernanza(Model model) {
        model.addAttribute("partidos", partidos);
        return "gobernanza";
    }

    @PostMapping("/votar")
    public String votar(@RequestParam String nombrePartido, Model model) {
        for (Partido partido : partidos) {
            if (partido.getNombre().equalsIgnoreCase(nombrePartido)) {
                partido.incrementarVotos();
                break;
            }
        }
        model.addAttribute("partidos", partidos);
        return "gobernanza";
    }
}
