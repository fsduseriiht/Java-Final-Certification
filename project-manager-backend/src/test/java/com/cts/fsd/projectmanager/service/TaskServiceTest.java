package com.cts.fsd.projectmanager.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.junit.Assert;
import org.junit.Test;
import org.mockito.Matchers;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.cts.fsd.projectmanager.entity.ParentTaskEntity;
import com.cts.fsd.projectmanager.entity.ProjectEntity;
import com.cts.fsd.projectmanager.entity.TaskEntity;
import com.cts.fsd.projectmanager.entity.UserEntity;
import com.cts.fsd.projectmanager.mapper.ApplicationMapperObject;
import com.cts.fsd.projectmanager.pojo.ProjectPOJO;
import com.cts.fsd.projectmanager.pojo.TaskPOJO;
import com.cts.fsd.projectmanager.repo.TaskRepository;

public class TaskServiceTest {
	
	@MockBean
	protected ApplicationMapperObject mapper;
	
	@MockBean
	protected TaskRepository taskRepository;
	
	@MockBean
	protected ParentTaskService parentTaskService;
	
	@MockBean
	protected ProjectService projectService;
	
	@MockBean
	protected UserService userService;
	
	@Autowired
	protected TaskService taskService;
	
	@Test
	public void testGetTaskById() {
		
		int taskId = 333;
		TaskEntity taskFromDB = new TaskEntity();
		taskFromDB.setTaskId(Long.valueOf(taskId));
		taskFromDB.setTask("fake_task");
		taskFromDB.setStartDate(new java.sql.Date(new Date().getTime()));
		taskFromDB.setEndDate(new java.sql.Date(new Date().getTime()));
		taskFromDB.setPriority(10);
		
		UserEntity userFromDB = new UserEntity();
		userFromDB.setUserId(Long.valueOf(1));
		userFromDB.setFirstName("fake_firstName");
		userFromDB.setLastName("fake_lastName");
		userFromDB.setEmployeeId("fake_employeeId");
		
		taskFromDB.setUserEntity(userFromDB);
		
		int projectId = 1;
		ProjectEntity projectEntityFromDB = new ProjectEntity();
		projectEntityFromDB.setProjectId(Long.valueOf(projectId));
		projectEntityFromDB.setProject("fake_project");
		projectEntityFromDB.setStartDate(new java.sql.Date(new Date().getTime()));
		projectEntityFromDB.setEndDate(new java.sql.Date(new Date().getTime()));
		projectEntityFromDB.setPriority(10);
		
		taskFromDB.setProjectEntity(projectEntityFromDB);
		
		int parentId = 1;
		ParentTaskEntity parentTaskEntityFromDB = new ParentTaskEntity();
		parentTaskEntityFromDB.setParentId(Long.valueOf(parentId));
		parentTaskEntityFromDB.setParentTask("fake_parentTask");
		
		taskFromDB.setParentTaskEntity(parentTaskEntityFromDB);
		
		Optional<TaskEntity> optional = Optional.of(taskFromDB);
		
		Mockito.when(taskRepository.findById(Long.valueOf(taskId))).thenReturn(optional);
		
		TaskEntity result = taskService.getTaskById(taskId);
		Assert.assertNotNull(result);
		
	}
	
	@Test
	public void testCreateTasks() {
		
		List<TaskPOJO> taskPOJOList = new ArrayList<TaskPOJO>();
		
		int parentId = 1;
		int projectId = 1;
		int userId = 1;
		int taskId = 333;

		TaskPOJO taskPOJO = new TaskPOJO();
		taskPOJO.setTaskId(taskId);
		taskPOJO.setTask("fake_task");
		taskPOJO.setStartDate(new Date());
		taskPOJO.setEndDate(new Date());
		taskPOJO.setPriority(10);
		taskPOJO.setParentId(parentId);
		taskPOJO.setProjectId(projectId);
		taskPOJO.setUserId(userId);
		
		taskPOJOList.add(taskPOJO);
		
		ParentTaskEntity parentTaskEntityFromDB = new ParentTaskEntity();
		parentTaskEntityFromDB.setParentId(Long.valueOf(parentId));
		parentTaskEntityFromDB.setParentTask("fake_parentTask");
		
		Mockito.when(parentTaskService.getParentTaskById(taskPOJO.getParentId())).thenReturn(parentTaskEntityFromDB);
		
		ProjectEntity projectEntityFromDB = new ProjectEntity();
		projectEntityFromDB.setProjectId(Long.valueOf(projectId));
		projectEntityFromDB.setProject("fake_project");
		projectEntityFromDB.setStartDate(new java.sql.Date(new Date().getTime()));
		projectEntityFromDB.setEndDate(new java.sql.Date(new Date().getTime()));
		projectEntityFromDB.setPriority(10);
		
		Mockito.when(projectService.getProjectById(taskPOJO.getProjectId())).thenReturn(projectEntityFromDB);
		

		UserEntity userEntityFromDB = new UserEntity();
		userEntityFromDB.setUserId(Long.valueOf(userId));
		userEntityFromDB.setFirstName("fake_firstName");
		userEntityFromDB.setLastName("fake_lastName");
		userEntityFromDB.setEmployeeId("fake_employeeId");

		Mockito.when(userService.getUserById(taskPOJO.getUserId())).thenReturn(userEntityFromDB);
		
		TaskEntity taskEntity = new TaskEntity();
		taskEntity.setTaskId(taskId);
		taskEntity.setTask("fake_task");
		taskEntity.setStartDate(new java.sql.Date(new Date().getTime()));
		taskEntity.setEndDate(new java.sql.Date(new Date().getTime()));
		taskEntity.setPriority(10);
		taskEntity.setParentTaskEntity(parentTaskEntityFromDB);
		taskEntity.setProjectEntity(projectEntityFromDB);
		taskEntity.setUserEntity(userEntityFromDB);

		Mockito.when(mapper.mapTaskPojoToEntity(Matchers.<TaskPOJO>any())).thenReturn(taskEntity);
		
		List<TaskEntity> dbResponse = new ArrayList<TaskEntity>();
		dbResponse.add(taskEntity);
		
		Mockito.when(taskRepository.saveAll(Matchers.<List<TaskEntity>>any())).thenReturn(dbResponse);
		
		Mockito.when(mapper.mapTaskEntityToPojo(Matchers.<TaskEntity>any())).thenReturn(taskPOJO);
		
		List<TaskPOJO> result = taskService.createTasks(taskPOJOList);
		Assert.assertNotNull(result);
		
	}
	
	@Test
	public void testGetAllTasks() {
		
		int parentId = 1;
		int projectId = 1;
		int userId = 1;
		int taskId = 333;
		
		ParentTaskEntity parentTaskEntityFromDB = new ParentTaskEntity();
		parentTaskEntityFromDB.setParentId(Long.valueOf(parentId));
		parentTaskEntityFromDB.setParentTask("fake_parentTask");
		
		ProjectEntity projectEntityFromDB = new ProjectEntity();
		projectEntityFromDB.setProjectId(Long.valueOf(projectId));
		projectEntityFromDB.setProject("fake_project");
		projectEntityFromDB.setStartDate(new java.sql.Date(new Date().getTime()));
		projectEntityFromDB.setEndDate(new java.sql.Date(new Date().getTime()));
		projectEntityFromDB.setPriority(10);

		UserEntity userEntityFromDB = new UserEntity();
		userEntityFromDB.setUserId(Long.valueOf(userId));
		userEntityFromDB.setFirstName("fake_firstName");
		userEntityFromDB.setLastName("fake_lastName");
		userEntityFromDB.setEmployeeId("fake_employeeId");
		
		TaskEntity taskEntity = new TaskEntity();
		taskEntity.setTaskId(taskId);
		taskEntity.setTask("fake_task");
		taskEntity.setStartDate(new java.sql.Date(new Date().getTime()));
		taskEntity.setEndDate(new java.sql.Date(new Date().getTime()));
		taskEntity.setPriority(10);
		taskEntity.setParentTaskEntity(parentTaskEntityFromDB);
		taskEntity.setProjectEntity(projectEntityFromDB);
		taskEntity.setUserEntity(userEntityFromDB);
		
		List<TaskEntity> dbResponse = new ArrayList<TaskEntity>();
		dbResponse.add(taskEntity);
		
		Mockito.when(taskRepository.findAll()).thenReturn(dbResponse);
		
		TaskPOJO taskPOJO = new TaskPOJO();
		taskPOJO.setTaskId(taskId);
		taskPOJO.setTask("fake_task");
		taskPOJO.setStartDate(new Date());
		taskPOJO.setEndDate(new Date());
		taskPOJO.setPriority(10);
		taskPOJO.setParentId(parentId);
		taskPOJO.setProjectId(projectId);
		taskPOJO.setUserId(userId);
		
		Mockito.when(mapper.mapTaskEntityToPojo(Matchers.<TaskEntity>any())).thenReturn(taskPOJO);
		
		
		List<TaskPOJO> result = taskService.getAllTasks();
		Assert.assertNotNull(result);
		
		
	}
	
	
	
	
	@Test
	public void testEditTaskById() {
		
	}
	
	
	/*
	

	

	

	@Test
	public void testRemoveTaskById() {
		fail("Not yet implemented");
	}
	*/
	
	

}
