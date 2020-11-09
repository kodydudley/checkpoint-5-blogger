import { Auth0Provider } from '@bcwdev/auth0provider-client'
import { AppState } from '../AppState'
import { audience, clientId, domain } from '../AuthConfig'
import router from '../router'
import { allBlogsService } from './AllBlogsService'
import { setBearer } from './AxiosService'
import { profileService } from '../services/ProfileService'

export const AuthService = Auth0Provider.initialize({
  domain,
  clientId,
  audience,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    )
  }
})

AuthService.on(AuthService.AUTH_EVENTS.AUTHENTICATED, async function() {
  setBearer(AuthService.bearer)
  await profileService.getProfile()
  AppState.user = AuthService.user
  profileService.getProfile()
  allBlogsService.getAllBlogs()
  // NOTE if there is something you want to do once the user is authenticated, place that here
})
