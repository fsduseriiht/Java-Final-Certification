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

import com.cts.fsd.projectmanager.entity.UserEntity;
import com.cts.fsd.projectmanager.mapper.ApplicationMapperObject;
import com.cts.fsd.projectmanager.pojo.UserPOJO;
import com.cts.fsd.projectmanager.repo.TaskRepository;
import com.cts.fsd.projectmanager.repo.UserRepository;


@RunWith(SpringRunner.class)
@SpringBootTest
public class UserServiceTest {
	
	@MockBean
	protected ApplicationMapperObject mapper;
	
	@MockBean
	protected TaskRepository taskRepository;
	
	@MockBean
	protected UserRepository userRepository;
	
	@MockBean
	protected ParentTaskService parentTaskService;
	
	@MockBean
	protected TaskService taskService;
	
	@MockBean
	protected ProjectService projectService;
	
	@Autowired
	protected UserService userService;

	@Test
	public void testCreateUsers() {
		
		List<UserPOJO> userPOJOList = new ArrayList<UserPOJO>();
		
		UserPOJO userPOJO = new UserPOJO();
		userPOJO.setUserId(1);
		userPOJO.setFirstName("fake_firstName");
		userPOJO.setLastName("fake_lastName");
		userPOJO.setEmployeeId("fake_employeeId");
		
		userPOJOList.add(userPOJO);
		
		UserEntity userEntity = new UserEntity();
		
		List<UserEntity> dbResponse = new ArrayList<>();
		dbResponse.add(userEntity);
		
		
		Mockito.when(userRepository.saveAll(Matchers.<List<UserEntity>>any())).thenReturn(dbResponse);
		Mockito.when(mapper.mapUserPojoToEntity(userPOJO)).thenReturn(userEntity);
		Mockito.when(mapper.mapUserEntityToPojo(userEntity)).thenReturn(userPOJO);
		
		List<UserPOJO> result = userService.createUsers(userPOJOList);
		Assert.assertNotNull(result);
		
	}
	
	@Test
	public void testCreateUsers_dbResponse_empty() {
		
		List<UserPOJO> userPOJOList = new ArrayList<UserPOJO>();
		
		UserPOJO userPOJO = new UserPOJO();
		userPOJO.setUserId(1);
		userPOJO.setFirstName("fake_firstName");
		userPOJO.setLastName("fake_lastName");
		userPOJO.setEmployeeId("fake_employeeId");
		
		userPOJOList.add(userPOJO);
		
		UserEntity userEntity = new UserEntity();
		
		List<UserEntity> dbResponse = new ArrayList<>();
		
		Mockito.when(userRepository.saveAll(Matchers.<List<UserEntity>>any())).thenReturn(dbResponse);
		Mockito.when(mapper.mapUserPojoToEntity(userPOJO)).thenReturn(userEntity);
		Mockito.when(mapper.mapUserEntityToPojo(userEntity)).thenReturn(userPOJO);
		
		List<UserPOJO> result = userService.createUsers(userPOJOList);
		Assert.assertNotNull(result);
		
	}
	
	@Test
	public void testCreateUsers_dbResponse_null() {
		
		List<UserPOJO> userPOJOList = new ArrayList<UserPOJO>();
		
		UserPOJO userPOJO = new UserPOJO();
		userPOJO.setUserId(1);
		userPOJO.setFirstName("fake_firstName");
		userPOJO.setLastName("fake_lastName");
		userPOJO.setEmployeeId("fake_employeeId");
		
		userPOJOList.add(userPOJO);
		
		UserEntity userEntity = new UserEntity();
		
		List<UserEntity> dbResponse = null;
		
		
		Mockito.when(userRepository.saveAll(Matchers.<List<UserEntity>>any())).thenReturn(dbResponse);
		
		Mockito.when(mapper.mapUserPojoToEntity(userPOJO)).thenReturn(userEntity);
		Mockito.when(mapper.mapUserEntityToPojo(userEntity)).thenReturn(userPOJO);
		
		List<UserPOJO> result = userService.createUsers(userPOJOList);
		Assert.assertNotNull(result);
		
	}
	
	@Test
	public void testCreateUsers_userPOJOList_empty() {
		
		List<UserPOJO> userPOJOList = new ArrayList<UserPOJO>();
		
		UserPOJO userPOJO = new UserPOJO();
		userPOJO.setUserId(1);
		userPOJO.setFirstName("fake_firstName");
		userPOJO.setLastName("fake_lastName");
		userPOJO.setEmployeeId("fake_employeeId");
		
		
		UserEntity userEntity = new UserEntity();
		List<UserEntity> dbResponse = new ArrayList<>();
		dbResponse.add(userEntity);
		
		
		Mockito.when(userRepository.saveAll(Matchers.<List<UserEntity>>any())).thenReturn(dbResponse);
		
		Mockito.when(mapper.mapUserPojoToEntity(userPOJO)).thenReturn(userEntity);
		Mockito.when(mapper.mapUserEntityToPojo(userEntity)).thenReturn(userPOJO);
		
		List<UserPOJO> result = userService.createUsers(userPOJOList);
		Assert.assertNotNull(result);
		
	}
	
	@Test
	public void testCreateUsers_userPOJOList_null() {
		
		List<UserPOJO> userPOJOList = null;
		
		UserPOJO userPOJO = new UserPOJO();
		userPOJO.setUserId(1);
		userPOJO.setFirstName("fake_firstName");
		userPOJO.setLastName("fake_lastName");
		userPOJO.setEmployeeId("fake_employeeId");
		
		
		UserEntity userEntity = new UserEntity();
		List<UserEntity> dbResponse = new ArrayList<>();
		dbResponse.add(userEntity);
		
		
		Mockito.when(userRepository.saveAll(Matchers.<List<UserEntity>>any())).thenReturn(dbResponse);
		
		Mockito.when(mapper.mapUserPojoToEntity(userPOJO)).thenReturn(userEntity);
		Mockito.when(mapper.mapUserEntityToPojo(userEntity)).thenReturn(userPOJO);
		
		List<UserPOJO> result = userService.createUsers(userPOJOList);
		Assert.assertNotNull(result);
		
	}
	
	@Test
	public void testGetAllUsers() {
		UserEntity userEntity = new UserEntity();
		List<UserEntity> dbResponse = new ArrayList<>();
		dbResponse.add(userEntity);
		
		UserPOJO userPOJO = new UserPOJO();
		userPOJO.setUserId(1);
		userPOJO.setFirstName("fake_firstName");
		userPOJO.setLastName("fake_lastName");
		userPOJO.setEmployeeId("fake_employeeId");
		
		Mockito.when(userRepository.findAll()).thenReturn(dbResponse);
		Mockito.when(mapper.mapUserEntityToPojo(userEntity)).thenReturn(userPOJO);
		
		List<UserPOJO> result = userService.getAllUsers();
		Assert.assertNotNull(result);
		
	}
	
	@Test
	public void testGetAllUsers_dbResponse_empty() {
		UserEntity userEntity = new UserEntity();
		List<UserEntity> dbResponse = new ArrayList<>();
		
		UserPOJO userPOJO = new UserPOJO();
		userPOJO.setUserId(1);
		userPOJO.setFirstName("fake_firstName");
		userPOJO.setLastName("fake_lastName");
		userPOJO.setEmployeeId("fake_employeeId");
		
		Mockito.when(userRepository.findAll()).thenReturn(dbResponse);
		Mockito.when(mapper.mapUserEntityToPojo(userEntity)).thenReturn(userPOJO);
		
		List<UserPOJO> result = userService.getAllUsers();
		Assert.assertNotNull(result);
		
	}
	
	@Test
	public void testGetAllUsers_dbResponse_null() {
		UserEntity userEntity = new UserEntity();
		List<UserEntity> dbResponse = null;
		
		UserPOJO userPOJO = new UserPOJO();
		userPOJO.setUserId(1);
		userPOJO.setFirstName("fake_firstName");
		userPOJO.setLastName("fake_lastName");
		userPOJO.setEmployeeId("fake_employeeId");
		
		Mockito.when(userRepository.findAll()).thenReturn(dbResponse);
		Mockito.when(mapper.mapUserEntityToPojo(userEntity)).thenReturn(userPOJO);
		
		List<UserPOJO> result = userService.getAllUsers();
		Assert.assertNotNull(result);
		
	}

	
	@Test
	public void testEditUserById() {
		
		int userId = 333;
		UserEntity userFromDB = new UserEntity();
		userFromDB.setUserId(1);
		userFromDB.setFirstName("firstName");
		userFromDB.setLastName("lastName");
		userFromDB.setEmployeeId("employeeId");
		
		UserPOJO userPOJO = new UserPOJO();
		userPOJO.setUserId(1);
		userPOJO.setFirstName("fake_firstName");
		userPOJO.setLastName("fake_lastName");
		userPOJO.setEmployeeId("fake_employeeId");
		
		Optional<UserEntity> optional = Optional.of(userFromDB);
		Mockito.when(userRepository.findById(Long.valueOf(userId))).thenReturn(optional);
		
		UserEntity userFromDB_updated = new UserEntity();
		userFromDB_updated.setUserId(userPOJO.getUserId());
		userFromDB_updated.setFirstName(userPOJO.getFirstName());
		userFromDB_updated.setLastName(userPOJO.getLastName());
		userFromDB_updated.setEmployeeId(userPOJO.getEmployeeId());
		
		Mockito.when(userRepository.save(Matchers.any(UserEntity.class))).thenReturn(userFromDB_updated);
		
		
		Mockito.when(mapper.mapUserEntityToPojo(userFromDB_updated)).thenReturn(userPOJO);
		
		UserPOJO result = userService.editUserById(userId , userPOJO);
		Assert.assertNotNull(result);
		
	}
	
	@Test
	public void testGetUserById() {
		
		int userId = 333;
		UserEntity userFromDB = new UserEntity();
		userFromDB.setUserId(1);
		userFromDB.setFirstName("firstName");
		userFromDB.setLastName("lastName");
		userFromDB.setEmployeeId("employeeId");
		
		Optional<UserEntity> optional = Optional.of(userFromDB);
		
		Mockito.when(userRepository.findById(Long.valueOf(userId))).thenReturn(optional);
		
		UserEntity result = userService.getUserById(userId);
		Assert.assertNotNull(result);
	}
	
	
	@Test
	public void testRemoveUserById() {
		
		int userId = 333;
		UserEntity userFromDB = new UserEntity();
		userFromDB.setUserId(1);
		userFromDB.setFirstName("firstName");
		userFromDB.setLastName("lastName");
		userFromDB.setEmployeeId("employeeId");
		
		Optional<UserEntity> optional = Optional.of(userFromDB);
		
		Mockito.when(userRepository.findById(Long.valueOf(userId))).thenReturn(optional);
		
		UserEntity userFromDB_updated = new UserEntity();
		userFromDB_updated.setUserId(1);
		userFromDB_updated.setFirstName("fake_firstName");
		userFromDB_updated.setLastName("fake_lastName");
		userFromDB_updated.setEmployeeId("fake_employeeId");
		Mockito
			.doNothing()
			.when(userRepository)
			.deleteUserById(Long.valueOf(userFromDB.getUserId()));
		
		boolean result = userService.removeUserById(userId);
		Assert.assertNotNull(Boolean.valueOf(result));
		
	}
	


	

	

}
