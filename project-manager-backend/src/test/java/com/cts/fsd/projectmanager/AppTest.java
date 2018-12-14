package com.cts.fsd.projectmanager;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;

import com.cts.fsd.projectmanager.repo.ParentTaskRepositoryTest;
import com.cts.fsd.projectmanager.repo.ProjectRepositoryTest;
import com.cts.fsd.projectmanager.repo.TaskRepositoryTest;
import com.cts.fsd.projectmanager.repo.UserRepositoryTest;

@RunWith(Suite.class)
@Suite.SuiteClasses({
	ParentTaskRepositoryTest.class,
	ProjectRepositoryTest.class,
	TaskRepositoryTest.class,
	UserRepositoryTest.class
})
public class AppTest {



}
