package br.edu.ufape.lmts.sementes.controller;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import br.edu.ufape.lmts.sementes.controller.dto.request.GerenteRequest;
import br.edu.ufape.lmts.sementes.controller.dto.response.GerenteResponse;
import br.edu.ufape.lmts.sementes.facade.Facade;
import br.edu.ufape.lmts.sementes.model.Gerente;
import jakarta.validation.Valid;


@CrossOrigin (origins = "http://localhost:8081/" )
@RestController
@RequestMapping("/api/v1/")
public class GerenteController {
	@Autowired
	private Facade facade;
	@Autowired
	private ModelMapper modelMapper;
	
	@GetMapping("gerente")
	public List<GerenteResponse> getAllGerente() {
		return facade.getAllGerente()
			.stream()
			.map(GerenteResponse::new)
			.toList();
	}
	
	@PostMapping("gerente")
	public GerenteResponse createGerente(@Valid @RequestBody GerenteRequest newObj) {
		return new GerenteResponse(facade.saveGerente(newObj.convertToEntity()));
	}
	
	@GetMapping("gerente/{id}")
	public GerenteResponse getGerenteById(@PathVariable Long id) {
		try {
			return new GerenteResponse(facade.findGerenteById(id));
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Gerente " + id + " not found.");
		}
	}
	
	@PatchMapping("gerente/{id}")
	public GerenteResponse updateGerente(@PathVariable Long id, @Valid @RequestBody GerenteRequest obj) {
		try {
			//Gerente o = obj.convertToEntity();
			Gerente oldObject = facade.findGerenteById(id);

			TypeMap<GerenteRequest, Gerente> typeMapper = modelMapper
													.typeMap(GerenteRequest.class, Gerente.class)
													.addMappings(mapper -> mapper.skip(Gerente::setId));			
			
			
			typeMapper.map(obj, oldObject);	
			return new GerenteResponse(facade.updateGerente(oldObject));
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, ex.getMessage());
		}
		
	}
	
	@DeleteMapping("gerente/{id}")
	public String deleteGerente(@PathVariable Long id) {
		try {
			facade.deleteGerente(id);
			return "";
		} catch (RuntimeException ex) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, ex.getMessage());
		}
		
	}
	@PatchMapping("/gerente/agricultor/{id}")
	public ResponseEntity<String> validateAgricultor(@PathVariable Long id) {
		facade.validateAgricultor(id);
		return ResponseEntity.status(HttpStatus.OK).body("Agricultor autorizado com sucesso.");
		
	}

}
