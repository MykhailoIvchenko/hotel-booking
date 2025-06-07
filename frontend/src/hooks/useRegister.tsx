import CustomToast from '@/components/customToast/CustomToast';
import useUserDispatch from '@/redux/hooks/dispatchHooks/useUserDispatch';
import { routerConfig } from '@/routes/config';
import { useRegisterMutation } from '@/rtkQApi/auth';
import { accessTokenService } from '@/services/accessTokenService';
import { helperService } from '@/services/helperService';
import { localStorageService } from '@/services/localStorageService';
import { LocalStorageKeys } from '@/utils/enums';
import { IUserAccountData } from '@/utils/types';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

export const useRegister = () => {
  const navigate = useNavigate();

  const setUser = useUserDispatch();

  const [register, { isLoading }] = useRegisterMutation();

  const registerUser = async (data: IUserAccountData) => {
    const userPhone = localStorageService.get(LocalStorageKeys.SignUpNumber);

    const { phone, fullName, password, email, alternatePhone, photo } = data;

    if (userPhone !== phone) {
      toast.error(
        <CustomToast
          title='Registration Error'
          message={`Your contact phone doesn't match the phone entered on the previous step`}
          type={'error'}
        />
      );

      return;
    }

    try {
      let photoToSave;

      if (photo) {
        if (typeof photo === 'string') {
          photoToSave = photo;
        } else {
          photoToSave = await helperService.convertFileToBase64(photo[0]);
        }
      }

      const userData = {
        phone,
        alternatePhone,
        email,
        fullName,
        photo: photoToSave,
        password,
      };

      //TODO: Separate creation and get me result handling
      const { user, accessToken } = await register(userData).unwrap();

      accessTokenService.save(accessToken);

      setUser(user);

      toast.success(
        <CustomToast
          title='Account Created!'
          message='Your account has been successfully created.'
          type={'success'}
        />
      );

      navigate(routerConfig.home.path);
    } catch {
      toast.error(
        <CustomToast
          title='Registration Error'
          message={`Something went wrong`}
          type={'error'}
        />
      );
    }
  };

  return { isLoading, registerUser };
};
