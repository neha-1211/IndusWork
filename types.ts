import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

export type TabParamList = {
  Home: undefined;
  Menu: undefined;
  More: undefined;
};

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Forgot: {type: string};
  Registration: undefined;
  VerifyOTP: {contact?: string} | undefined;

  Tabs: NavigatorScreenParams<TabParamList> | undefined;

  // Employee management
  Employees: undefined;
  EmployeeDetails: {employeeId: string};
  AddEmployee: undefined;
  OrganisationSetup: undefined;
  OrganisationHierarchy: undefined;

  // Task and project management
  Tasks: undefined;
  CreateTask: undefined;
  TaskDetails: {taskId: string};
  Projects: undefined;
  ProjectDetails: {projectId: string};

  // Issues and escalations
  MyIssues: undefined;
  ReportIssue: undefined;
  IssueDetails: {issueId: string};

  // Industrial operations
  ShiftHandover: undefined;
  Maintenance: undefined;
  WorkOrderDetails: {workOrderId: string};
  Production: undefined;
  Quality: undefined;
  Safety: undefined;

  // Other screens
  Reports: undefined;
  Notifications: undefined;
  Profile: undefined;
  CompanySettings: undefined;
};

export type StackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type TabScreenProps<T extends keyof TabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<TabParamList, T>,
    NativeStackScreenProps<RootStackParamList>
  >;