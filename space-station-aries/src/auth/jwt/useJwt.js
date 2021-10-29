/* eslint-disable react-hooks/rules-of-hooks */
// ** Core JWT Import
import useJwt from '@src/@core/auth/jwt/useJwt'

const { jwt } = useJwt({})

export default jwt
