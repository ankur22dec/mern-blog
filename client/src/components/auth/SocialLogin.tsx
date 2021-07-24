import React from 'react'
import { useDispatch } from 'react-redux'

import { GoogleLogin, GoogleLoginResponse } from 'react-google-login-lite';
import { FacebookLogin, FacebookLoginAuthResponse } from 'react-facebook-login-lite';

import { googleLogin, facebookLogin } from '../../redux/actions/authAction'

const SocialLogin = () => {
  const dispatch = useDispatch()

  const onSuccess = (googleUser: GoogleLoginResponse) => {
    const id_token = googleUser.getAuthResponse().id_token
    dispatch(googleLogin(id_token))
  }
  
  const onFBSuccess = (response: FacebookLoginAuthResponse) => {
    const { accessToken, userID } = response.authResponse
    dispatch(facebookLogin(accessToken, userID))
  }
  

  return (
    <>
      <div className="my-2">
        <GoogleLogin 
        client_id='821073095808-ic7q3cu8ovbdaf1guc92kgm11a8ahaeu.apps.googleusercontent.com'
        cookiepolicy='single_host_origin'
        onSuccess={onSuccess}
        />
      </div>

      <div className="my-2">
        <FacebookLogin 
        appId="187540546686471"
        onSuccess={onFBSuccess}
        />
      </div>
    </>
  )
}

export default SocialLogin
