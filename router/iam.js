import i18n from '@/locales'
import Layout from '@/layouts/RouterView'
import IDP from '@System/views/idp'
import IDPEdit from '@System/views/idp/edit'
import Domain from '@System/views/domains'
import DomainCreate from '@System/views/domains/create'
import Projects from '@System/views/projects'
import SecurityAlerts from '@System/views/security-alerts'
import ProjectCreate from '@System/views/projects/create'
import Group from '@System/views/group'
import User from '@System/views/user'
import UserCreate from '@System/views/user/create'
import Role from '@System/views/role'
import Policy from '@System/views/policy'
import PolicyCreate from '@System/views/policy/Create'
import PolicyUpdate from '@System/views/policy/Update'
import SuggestsAlert from '@Bill/views/suggestsalert'
import SuggestsRuleConfig from '@Bill/views/suggestsysruleconfig'
import SuggestsRule from '@Bill/views/suggestsrule'

function menuPath (path) {
  return '/iam' + path
}

export default {
  index: 91,
  meta: {
    label: i18n.t('scope.text_959'),
    icon: 'menu-iam',
  },
  menus: [
    {
      meta: {
        label: i18n.t('common_21'),
      },
      submenus: [
        {
          path: '/idp',
          meta: {
            label: i18n.t('system.text_4'),
            permission: 'idps_list',
            t: 'dictionary.identity_provider',
          },
          component: Layout,
          children: [
            {
              name: 'IdpList',
              path: '',
              meta: {},
              component: IDP,
            },
            {
              name: 'IdpCreate',
              path: 'create',
              meta: {},
              component: IDPEdit,
            },
            {
              name: 'IdpUpdate',
              path: 'update/:id',
              meta: {},
              component: IDPEdit,
            },
          ],
        },
        {
          path: '/domain',
          meta: {
            label: i18n.t('system.text_5'),
            permission: 'domains_list',
            t: 'dictionary.domain',
          },
          component: Layout,
          children: [
            {
              name: 'Domain',
              path: '',
              component: Domain,
            },
            {
              name: 'DomainCreate',
              path: 'create',
              component: DomainCreate,
            },
          ],
        },
        {
          path: '/project',
          meta: {
            label: i18n.t('system.text_9'),
            permission: 'projects_list',
            t: 'dictionary.project',
          },
          component: Layout,
          children: [
            {
              name: 'Projects',
              path: '',
              component: Projects,
            },
            {
              name: 'ProjectCreate',
              path: 'create',
              component: ProjectCreate,
            },
          ],
        },
        {
          path: '/group',
          meta: {
            label: i18n.t('system.text_7'),
            permission: 'groups_list',
            t: 'dictionary.group',
          },
          component: Layout,
          children: [
            {
              name: 'GroupList',
              path: '',
              component: Group,
            },
          ],
        },
        {
          path: '/systemuser',
          meta: {
            label: i18n.t('system.text_6'),
            permission: 'users_list',
            t: 'dictionary.user',
          },
          component: Layout,
          children: [
            {
              name: 'User',
              path: '',
              meta: {},
              component: User,
            },
            {
              name: 'UserCreate',
              path: 'create',
              meta: {},
              component: UserCreate,
            },
          ],
        },
        {
          path: '/role',
          meta: {
            label: i18n.t('system.text_10'),
            permission: 'roles_list',
            t: 'dictionary.role',
          },
          component: Layout,
          children: [
            {
              name: 'RoleList',
              path: '',
              component: Role,
            },
          ],
        },
        {
          path: '/policy',
          meta: {
            label: i18n.t('system.text_11'),
            permission: 'policies_list',
            t: 'dictionary.policy',
          },
          component: Layout,
          children: [
            {
              name: 'Policy',
              path: '',
              component: Policy,
            },
            {
              name: 'PolicyCreate',
              path: 'create',
              component: PolicyCreate,
            },
            {
              name: 'PolicyUpdate',
              path: 'update',
              component: PolicyUpdate,
            },
          ],
        },
      ],
    },
    {
      meta: {
        label: i18n.t('scope.text_960'),
      },
      submenus: [
        {
          path: menuPath('/suggestsysalert'),
          meta: {
            label: i18n.t('bill.text_254'),
            permission: 'suggestsysalerts_list',
          },
          component: Layout,
          children: [
            {
              name: 'SuggestsAlert',
              path: '',
              component: SuggestsAlert,
            },
          ],
        },
        {
          path: menuPath('/suggestsysruleconfig'),
          meta: {
            label: i18n.t('bill.text_255'),
            permission: 'suggestsysruleconfigs_list',
          },
          component: Layout,
          children: [
            {
              name: 'SuggestsRuleConfig',
              path: '',
              component: SuggestsRuleConfig,
            },
          ],
        },
        {
          path: menuPath('/suggestsysrule'),
          meta: {
            label: i18n.t('bill.text_256'),
            permission: 'suggestsysrules_list',
          },
          component: Layout,
          children: [
            {
              name: 'SuggestsRule',
              path: '',
              component: SuggestsRule,
            },
          ],
        },
      ],
    },
    {
      meta: {
        label: i18n.t('scope.text_961'),
      },
      submenus: [
        {
          path: menuPath('/securityalerts'),
          meta: {
            label: i18n.t('scope.text_961'),
          },
          component: Layout,
          children: [
            {
              name: 'SecurityAlerts',
              path: '',
              component: SecurityAlerts,
            },
          ],
        },
      ],
    },
  ],
}
