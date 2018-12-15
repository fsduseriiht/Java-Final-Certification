package com.cts.fsd.projectmanager.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Matchers;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.cts.fsd.projectmanager.entity.ParentTaskEntity;
import com.cts.fsd.projectmanager.mapper.ApplicationMapperObject;
import com.cts.fsd.projectmanager.pojo.ParentTaskPOJO;
import com.cts.fsd.projectmanager.repo.ParentTaskRepository;


@RunWith(SpringRunner.class)
@SpringBootTest
public class ParentTaskServiceTest {
	
	@MockBean
	protected ApplicationMapperObject mapper;
	
	@MockBean
	protected ParentTaskRepository parentTaskRepository;
	
	@Autowired
	protected ParentTaskService parentTaskService;
	
	@Test
	public void testGetParentTaskById() {
		
		int parentId = 333;
		
		ParentTaskEntity parentTaskFromDB = new ParentTaskEntity();
		parentTaskFromDB.setParentId(Long.valueOf(parentId));
		parentTaskFromDB.setParentTask("fake_parentTask");
		
		Optional<ParentTaskEntity> optional = Optional.of(parentTaskFromDB);
		
		Mockito.when(parentTaskRepository.findById(Matchers.anyLong())).thenReturn(optional);
		
		ParentTaskEntity result = parentTaskService.getParentTaskById(parentId);
		Assert.assertNotNull(result);
	}
	
	@Test
	public void testCreateParentTasks() {
		
		int parentId = 333;
		
		ParentTaskPOJO parentTaskPOJO = new ParentTaskPOJO();
		parentTaskPOJO.setParentId(parentId);
		parentTaskPOJO.setParentTask("fake_parentTask");
		
		List<ParentTaskPOJO> parentTaskPOJOList = new ArrayList<ParentTaskPOJO>();
		
		parentTaskPOJOList.add(parentTaskPOJO);
		
		ParentTaskEntity parentTaskFromDB = new ParentTaskEntity();
		parentTaskFromDB.setParentId(Long.valueOf(parentId));
		parentTaskFromDB.setParentTask("fake_parentTask");
		
		Mockito.when(mapper.mapParentTaskPojoToEntity(Matchers.<ParentTaskPOJO>any())).thenReturn(parentTaskFromDB);
		
		List<ParentTaskEntity> dbResponse = new ArrayList<ParentTaskEntity>();
		dbResponse.add(parentTaskFromDB);
		
		Mockito.when(parentTaskRepository.saveAll(Matchers.<List<ParentTaskEntity>>any())).thenReturn(dbResponse);
		
		Mockito.when(mapper.mapParentTaskEntityToPojo(Matchers.<ParentTaskEntity>any())).thenReturn(parentTaskPOJO);
		
		List<ParentTaskPOJO> result = parentTaskService.createParentTasks(parentTaskPOJOList);
		Assert.assertNotNull(result);
		
	}
	
	@Test
	public void testCreateParentTasks_parentTaskPOJOList_empty() {
		
		int parentId = 333;
		
		ParentTaskPOJO parentTaskPOJO = new ParentTaskPOJO();
		parentTaskPOJO.setParentId(parentId);
		parentTaskPOJO.setParentTask("fake_parentTask");
		
		List<ParentTaskPOJO> parentTaskPOJOList = new ArrayList<ParentTaskPOJO>();
		
		ParentTaskEntity parentTaskFromDB = new ParentTaskEntity();
		parentTaskFromDB.setParentId(Long.valueOf(parentId));
		parentTaskFromDB.setParentTask("fake_parentTask");
		
		Mockito.when(mapper.mapParentTaskPojoToEntity(Matchers.<ParentTaskPOJO>any())).thenReturn(parentTaskFromDB);
		
		List<ParentTaskEntity> dbResponse = new ArrayList<ParentTaskEntity>();
		dbResponse.add(parentTaskFromDB);
		
		Mockito.when(parentTaskRepository.saveAll(Matchers.<List<ParentTaskEntity>>any())).thenReturn(dbResponse);
		
		Mockito.when(mapper.mapParentTaskEntityToPojo(Matchers.<ParentTaskEntity>any())).thenReturn(parentTaskPOJO);
		
		List<ParentTaskPOJO> result = parentTaskService.createParentTasks(parentTaskPOJOList);
		Assert.assertNotNull(result);
		
	}
	
	@Test
	public void testCreateParentTasks_parentTaskPOJOList_null() {
		
		int parentId = 333;
		
		ParentTaskPOJO parentTaskPOJO = new ParentTaskPOJO();
		parentTaskPOJO.setParentId(parentId);
		parentTaskPOJO.setParentTask("fake_parentTask");
		
		List<ParentTaskPOJO> parentTaskPOJOList = new ArrayList<ParentTaskPOJO>();
		
		parentTaskPOJOList.add(parentTaskPOJO);
		
		ParentTaskEntity parentTaskFromDB = new ParentTaskEntity();
		parentTaskFromDB.setParentId(Long.valueOf(parentId));
		parentTaskFromDB.setParentTask("fake_parentTask");
		
		Mockito.when(mapper.mapParentTaskPojoToEntity(Matchers.<ParentTaskPOJO>any())).thenReturn(parentTaskFromDB);
		
		List<ParentTaskEntity> dbResponse = new ArrayList<ParentTaskEntity>();
		dbResponse.add(parentTaskFromDB);
		
		Mockito.when(parentTaskRepository.saveAll(Matchers.<List<ParentTaskEntity>>any())).thenReturn(dbResponse);
		
		Mockito.when(mapper.mapParentTaskEntityToPojo(Matchers.<ParentTaskEntity>any())).thenReturn(parentTaskPOJO);
		
		List<ParentTaskPOJO> result = parentTaskService.createParentTasks(null);
		Assert.assertNotNull(result);
		
	}
	
	@Test
	public void testCreateParentTasks_dbResponse_null() {
		
		int parentId = 333;
		
		ParentTaskPOJO parentTaskPOJO = new ParentTaskPOJO();
		parentTaskPOJO.setParentId(parentId);
		parentTaskPOJO.setParentTask("fake_parentTask");
		
		List<ParentTaskPOJO> parentTaskPOJOList = new ArrayList<ParentTaskPOJO>();
		
		parentTaskPOJOList.add(parentTaskPOJO);
		
		ParentTaskEntity parentTaskFromDB = new ParentTaskEntity();
		parentTaskFromDB.setParentId(Long.valueOf(parentId));
		parentTaskFromDB.setParentTask("fake_parentTask");
		
		Mockito.when(mapper.mapParentTaskPojoToEntity(Matchers.<ParentTaskPOJO>any())).thenReturn(parentTaskFromDB);
		
		List<ParentTaskEntity> dbResponse = null;
		
		Mockito.when(parentTaskRepository.saveAll(Matchers.<List<ParentTaskEntity>>any())).thenReturn(dbResponse);
		
		Mockito.when(mapper.mapParentTaskEntityToPojo(Matchers.<ParentTaskEntity>any())).thenReturn(parentTaskPOJO);
		
		List<ParentTaskPOJO> result = parentTaskService.createParentTasks(parentTaskPOJOList);
		Assert.assertNotNull(result);
		
	}
	
	@Test
	public void testCreateParentTasks_dbResponse_empty() {
		
		int parentId = 333;
		
		ParentTaskPOJO parentTaskPOJO = new ParentTaskPOJO();
		parentTaskPOJO.setParentId(parentId);
		parentTaskPOJO.setParentTask("fake_parentTask");
		
		List<ParentTaskPOJO> parentTaskPOJOList = new ArrayList<ParentTaskPOJO>();
		
		parentTaskPOJOList.add(parentTaskPOJO);
		
		ParentTaskEntity parentTaskFromDB = new ParentTaskEntity();
		parentTaskFromDB.setParentId(Long.valueOf(parentId));
		parentTaskFromDB.setParentTask("fake_parentTask");
		
		Mockito.when(mapper.mapParentTaskPojoToEntity(Matchers.<ParentTaskPOJO>any())).thenReturn(parentTaskFromDB);
		
		List<ParentTaskEntity> dbResponse = new ArrayList<ParentTaskEntity>();
		
		Mockito.when(parentTaskRepository.saveAll(Matchers.<List<ParentTaskEntity>>any())).thenReturn(dbResponse);
		
		Mockito.when(mapper.mapParentTaskEntityToPojo(Matchers.<ParentTaskEntity>any())).thenReturn(parentTaskPOJO);
		
		List<ParentTaskPOJO> result = parentTaskService.createParentTasks(parentTaskPOJOList);
		Assert.assertNotNull(result);
		
	}
	
	@Test
	public void testEditParentTaskById() {
		
		int parentId = 333;
		
		ParentTaskEntity parentTaskFromDB = new ParentTaskEntity();
		parentTaskFromDB.setParentId(Long.valueOf(parentId));
		parentTaskFromDB.setParentTask("fake_parentTask");
		
		Optional<ParentTaskEntity> optional = Optional.of(parentTaskFromDB);
		
		Mockito.when(parentTaskRepository.findById(Matchers.anyLong())).thenReturn(optional);
		
		Mockito.when(parentTaskRepository.save(Matchers.<ParentTaskEntity>any())).thenReturn(parentTaskFromDB);
		
		ParentTaskPOJO parentTaskPOJO = new ParentTaskPOJO();
		parentTaskPOJO.setParentId(parentId);
		parentTaskPOJO.setParentTask("fake_parentTask");
		
		Mockito.when(mapper.mapParentTaskEntityToPojo(Matchers.<ParentTaskEntity>any())).thenReturn(parentTaskPOJO);
		
		ParentTaskPOJO result = parentTaskService.editParentTaskById(parentId , parentTaskPOJO);
		Assert.assertNotNull(result);
		
	}
	
	@Test
	public void testRemoveParentTaskById() {
		
		int parentId = 333;
		
		ParentTaskEntity parentTaskFromDB = new ParentTaskEntity();
		parentTaskFromDB.setParentId(Long.valueOf(parentId));
		parentTaskFromDB.setParentTask("fake_parentTask");
		
		Optional<ParentTaskEntity> optional = Optional.of(parentTaskFromDB);
		
		Mockito.when(parentTaskRepository.findById(Matchers.anyLong())).thenReturn(optional);
		
		Mockito
			.doNothing()
			.when(parentTaskRepository)
			.deleteParentTaskById(Matchers.anyLong());
		
		boolean result = parentTaskService.removeParentTaskById(parentId);
		Assert.assertNotNull(Boolean.valueOf(result));
		
	}

	@Test
	public void testGetAllParentTasks() {
		
		int parentId = 333;
		
		ParentTaskEntity parentTaskFromDB = new ParentTaskEntity();
		parentTaskFromDB.setParentId(Long.valueOf(parentId));
		parentTaskFromDB.setParentTask("fake_parentTask");
		
		ParentTaskPOJO parentTaskPOJO = new ParentTaskPOJO();
		parentTaskPOJO.setParentId(parentId);
		parentTaskPOJO.setParentTask("fake_parentTask");
		
		List<ParentTaskPOJO> returnPojoList = new ArrayList<ParentTaskPOJO>();
		returnPojoList.add(parentTaskPOJO);
		
		List<ParentTaskEntity> dbResponse = new ArrayList<ParentTaskEntity>();
		dbResponse.add(parentTaskFromDB);
		
		Mockito.when(parentTaskRepository.findAll()).thenReturn(dbResponse);
		
		Mockito.when(mapper.mapParentTaskEntityToPojo(Matchers.<ParentTaskEntity>any())).thenReturn(parentTaskPOJO);
		
		
		List<ParentTaskPOJO> result = parentTaskService.getAllParentTasks();
		Assert.assertNotNull(result);
		
	}
	
	@Test
	public void testGetAllParentTasks_dbResponse_empty() {
		
		int parentId = 333;
		
		ParentTaskEntity parentTaskFromDB = new ParentTaskEntity();
		parentTaskFromDB.setParentId(Long.valueOf(parentId));
		parentTaskFromDB.setParentTask("fake_parentTask");
		
		ParentTaskPOJO parentTaskPOJO = new ParentTaskPOJO();
		parentTaskPOJO.setParentId(parentId);
		parentTaskPOJO.setParentTask("fake_parentTask");
		
		List<ParentTaskPOJO> returnPojoList = new ArrayList<ParentTaskPOJO>();
		returnPojoList.add(parentTaskPOJO);
		
		List<ParentTaskEntity> dbResponse = new ArrayList<ParentTaskEntity>();
		
		Mockito.when(parentTaskRepository.findAll()).thenReturn(dbResponse);
		
		Mockito.when(mapper.mapParentTaskEntityToPojo(Matchers.<ParentTaskEntity>any())).thenReturn(parentTaskPOJO);
		
		
		List<ParentTaskPOJO> result = parentTaskService.getAllParentTasks();
		Assert.assertNotNull(result);
		
	}
	

	@Test
	public void testGetAllParentTasks_dbResponse_null() {
		
		int parentId = 333;
		
		ParentTaskEntity parentTaskFromDB = new ParentTaskEntity();
		parentTaskFromDB.setParentId(Long.valueOf(parentId));
		parentTaskFromDB.setParentTask("fake_parentTask");
		
		ParentTaskPOJO parentTaskPOJO = new ParentTaskPOJO();
		parentTaskPOJO.setParentId(parentId);
		parentTaskPOJO.setParentTask("fake_parentTask");
		
		List<ParentTaskPOJO> returnPojoList = new ArrayList<ParentTaskPOJO>();
		returnPojoList.add(parentTaskPOJO);
		
		List<ParentTaskEntity> dbResponse = null;
		
		Mockito.when(parentTaskRepository.findAll()).thenReturn(dbResponse);
		
		Mockito.when(mapper.mapParentTaskEntityToPojo(Matchers.<ParentTaskEntity>any())).thenReturn(parentTaskPOJO);
		
		
		List<ParentTaskPOJO> result = parentTaskService.getAllParentTasks();
		Assert.assertNotNull(result);
		
	}
}
