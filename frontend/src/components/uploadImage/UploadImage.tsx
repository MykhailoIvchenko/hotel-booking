import type { ChangeEvent } from 'react';
import { useCallback, useRef } from 'react';
import type {
  Control,
  ControllerRenderProps,
  FieldValues,
  Path,
} from 'react-hook-form';
import { Controller } from 'react-hook-form';
import clsx from 'clsx';
import CameraIcon from '@/assets/icons/camera.svg?react';

import styles from './UploadImage.module.css';
import { toast } from 'react-toastify';
import CustomToast from '../customToast/CustomToast';

interface UploadImageProps<T extends FieldValues> {
  text?: string;
  inputName: Path<T>;
  control: Control<T>;
  imageClassName?: string;
  wrapperClassName?: string;
  value?: string | File[];
  acceptedValues?: string;
  tooltipText?: string;
}

const UploadImage = <T extends FieldValues>({
  text = 'Upload Photo',
  wrapperClassName,
  imageClassName,
  inputName,
  value,
  control,
  acceptedValues,
}: UploadImageProps<T>) => {
  const hiddenInputRef = useRef<HTMLInputElement | null>(null);

  const editClick = () => {
    if (hiddenInputRef.current) {
      hiddenInputRef.current.click();
    }
  };

  const handleUpload = useCallback(
    (
      event: ChangeEvent<HTMLInputElement>,
      field: ControllerRenderProps<T, Path<T>>
    ) => {
      const file = event.target.files?.[0];
      if (file && file.type.startsWith('image/')) {
        field.onChange([file]);
      } else {
        toast.error(
          <CustomToast
            title='Error'
            message='Only images could be uploaded'
            type={'error'}
          />
        );
      }
    },
    []
  );

  return (
    <div className={styles.container}>
      <label className={clsx(styles.wrapper, wrapperClassName)}>
        {typeof value === 'string' && value && (
          <img
            className={clsx(styles.image, imageClassName)}
            src={value}
            alt={value}
          />
        )}

        {value && value[0] && value[0] instanceof File && (
          <img
            className={clsx(styles.image, imageClassName)}
            src={URL.createObjectURL(value[0]) || ''}
            alt={value[0]?.name || 'Image'}
            onClick={editClick}
          />
        )}

        <Controller
          name={inputName}
          control={control}
          render={({ field }) => (
            <input
              type='file'
              className={styles.hiddenInput}
              ref={(el) => {
                field.ref(el);
                hiddenInputRef.current = el;
              }}
              onChange={(event) => handleUpload(event, field)}
              accept={acceptedValues}
            />
          )}
        />

        {!value && <CameraIcon className={styles.icon} />}
      </label>

      <p className={styles.text}>{!value && text}</p>
    </div>
  );
};

export default UploadImage;
