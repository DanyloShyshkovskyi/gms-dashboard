import { Button } from 'shared/ui/button'

import { useWebAuth } from './WebAuthProvider'

export const SocialSignIn = (): JSX.Element => {
  const { loginWithSocial, isBusy } = useWebAuth()

  return (
    <div display='flex' mt={3}>
      <Button
        disabled={isBusy}
        id='login-social-google-signup'
        onClick={loginWithSocial('google-oauth2')}
      >
        <svg
          fill='none'
          height='24px'
          mr={1}
          viewBox='0 0 25 24'
          width='25px'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M21.1445 12.2077C21.1445 11.5959 21.0949 10.9808 20.9891 10.3789H12.5V13.8446H17.3613C17.1596 14.9624 16.5114 15.9512 15.5623 16.5795V18.8283H18.4625C20.1656 17.2608 21.1445 14.9459 21.1445 12.2077Z'
            fill='#4285F4'
          />
          <path
            d='M12.5001 21.001C14.9275 21.001 16.9745 20.204 18.466 18.8283L15.5657 16.5795C14.7588 17.1285 13.7171 17.4393 12.5035 17.4393C10.1555 17.4393 8.16467 15.8553 7.45035 13.7256H4.45752V16.0438C5.98535 19.0829 9.09724 21.001 12.5001 21.001Z'
            fill='#34A853'
          />
          <path
            d='M7.4469 13.725C7.06991 12.6073 7.06991 11.3969 7.4469 10.2791V7.96094H4.45738C3.18087 10.504 3.18087 13.5002 4.45738 16.0432L7.4469 13.725Z'
            fill='#FBBC04'
          />
          <path
            d='M12.5001 6.56225C13.7833 6.5424 15.0234 7.02523 15.9527 7.9115L18.5222 5.34196C16.8951 3.81413 14.7357 2.97415 12.5001 3.00061C9.09724 3.00061 5.98535 4.91867 4.45752 7.96111L7.44705 10.2793C8.15805 8.1463 10.1522 6.56225 12.5001 6.56225Z'
            fill='#EA4335'
          />
        </svg>
        <span>{'Google'}</span>
      </Button>
      <Button
        disabled={isBusy}
        id='login-social-github-signup'
        onClick={loginWithSocial('github')}
      >
        <svg
          fill='none'
          height='24px'
          viewBox='0 0 25 24'
          width='25px'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M19.1586 5.22561C18.2643 3.69344 17.0514 2.48043 15.5193 1.58628C13.9871 0.692097 12.3143 0.245117 10.4998 0.245117C8.68561 0.245117 7.0123 0.692234 5.48037 1.58628C3.9482 2.48038 2.73528 3.69344 1.84105 5.22561C0.946949 6.75772 0.499878 8.43081 0.499878 10.2448C0.499878 12.4238 1.13562 14.3833 2.40742 16.1236C3.67909 17.8641 5.32189 19.0685 7.33569 19.7368C7.5701 19.7803 7.74363 19.7497 7.85646 19.6458C7.96933 19.5417 8.0257 19.4114 8.0257 19.2553C8.0257 19.2293 8.02347 18.995 8.01914 18.5522C8.01467 18.1094 8.01257 17.7232 8.01257 17.3936L7.71308 17.4454C7.52213 17.4804 7.28124 17.4952 6.99041 17.491C6.69972 17.4869 6.39795 17.4565 6.08551 17.3998C5.77293 17.3437 5.48219 17.2135 5.21307 17.0095C4.94409 16.8055 4.75314 16.5385 4.64027 16.2088L4.51006 15.9092C4.42328 15.7097 4.28664 15.4881 4.09998 15.2452C3.91332 15.0021 3.72455 14.8373 3.5336 14.7505L3.44244 14.6852C3.38169 14.6419 3.32532 14.5896 3.2732 14.5289C3.22111 14.4682 3.18212 14.4074 3.15608 14.3466C3.12999 14.2857 3.15161 14.2358 3.22116 14.1966C3.29071 14.1574 3.4164 14.1384 3.59877 14.1384L3.85909 14.1773C4.03271 14.2121 4.24747 14.316 4.50363 14.4897C4.75966 14.6633 4.97013 14.889 5.13509 15.1666C5.33484 15.5226 5.5755 15.7939 5.85775 15.9805C6.13978 16.1672 6.42413 16.2604 6.71053 16.2604C6.99693 16.2604 7.2443 16.2387 7.45271 16.1955C7.6609 16.1521 7.85623 16.0868 8.03861 16.0001C8.11673 15.4182 8.32944 14.9712 8.67654 14.6588C8.18181 14.6068 7.73702 14.5285 7.34194 14.4244C6.94709 14.3201 6.53905 14.1509 6.11811 13.9163C5.69695 13.6821 5.34756 13.3911 5.06987 13.0441C4.79213 12.6968 4.5642 12.241 4.38638 11.6769C4.20847 11.1126 4.1195 10.4616 4.1195 9.72377C4.1195 8.67325 4.46245 7.77929 5.14822 7.04139C4.82698 6.25159 4.8573 5.36621 5.2393 4.38532C5.49104 4.30711 5.86437 4.36581 6.35909 4.56104C6.85391 4.75637 7.2162 4.9237 7.44633 5.06243C7.67646 5.20112 7.86084 5.31864 7.99975 5.41396C8.8072 5.18835 9.64046 5.07552 10.4998 5.07552C11.3591 5.07552 12.1925 5.18835 13 5.41396L13.4948 5.1016C13.8331 4.89319 14.2327 4.70219 14.6925 4.52857C15.1525 4.35504 15.5043 4.30725 15.7475 4.38546C16.138 5.36639 16.1728 6.25173 15.8514 7.04153C16.5372 7.77943 16.8802 8.67361 16.8802 9.72391C16.8802 10.4617 16.7909 11.1147 16.6133 11.6834C16.4355 12.2521 16.2056 12.7076 15.9235 13.0506C15.6412 13.3936 15.2896 13.6822 14.8686 13.9165C14.4476 14.1509 14.0394 14.3201 13.6446 14.4243C13.2495 14.5286 12.8048 14.6069 12.31 14.659C12.7612 15.0495 12.9869 15.6659 12.9869 16.5078V19.255C12.9869 19.411 13.0412 19.5413 13.1498 19.6454C13.2583 19.7494 13.4296 19.78 13.6641 19.7364C15.6781 19.0682 17.3209 17.8638 18.5926 16.1233C19.864 14.3829 20.5 12.4235 20.5 10.2444C20.4995 8.43067 20.0522 6.75772 19.1586 5.22561Z'
            fill='white'
          />
        </svg>
        <span>{'Github'}</span>
      </Button>
    </div>
  )
}
