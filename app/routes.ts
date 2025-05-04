import { type RouteConfig, index, route } from '@react-router/dev/routes'

export default [
  index('./index.tsx'),

  route('users', './users/layout.tsx', [
    index('./users/index.tsx'),
    route('new', './users/new.tsx'),
    route(':id', './users/show.tsx'),
  ]),

  route('signin', './signin/layout.tsx', [
    index('./signin/index.tsx'),
    route(':provider', './signin/provider.tsx'),
    route(':provider/callback', './signin/callback.tsx'),
  ]),

  route('signout', './signout/index.tsx'),
] satisfies RouteConfig
