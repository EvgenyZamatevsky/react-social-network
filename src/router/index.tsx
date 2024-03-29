import {Path} from "enums"
import {lazy} from "react"
import {Navigate} from "react-router-dom"

const NotFound = lazy(() => import(/* webpackChunkName: 'NotFound' */"pages")
  .then(module => ({default: module.NotFound})))

const Login = lazy(() => import(/* webpackChunkName: 'Login' */"pages")
  .then(module => ({default: module.Login})))

const Profile = lazy(() => import(/* webpackChunkName: 'Profile' */"pages")
  .then(module => ({default: module.Profile})))

const Users = lazy(() => import(/* webpackChunkName: 'Users' */"pages")
  .then(module => ({default: module.Users})))

export const ROUTES = [
  {path: Path.HOME, element: <Navigate to={Path.PROFILE}/>},
  {path: Path.PROFILE, element: <Profile/>},
  {path: Path.USER_PROFILE, element: <Profile/>},
  {path: Path.USERS, element: <Users/>},
  {path: Path.LOGIN, element: <Login/>},
  {path: Path.NOT_FOUND, element: <Navigate to={Path.NOT_FOUND_404}/>},
  {path: Path.NOT_FOUND_404, element: <NotFound/>},
]
