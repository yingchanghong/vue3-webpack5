export const loginRule = {
  name: [
    {
      required: true,
      message: '用户名不能为空',
      trigger: 'blur',
    },
    {
      min: 3,
      max: 20,
      message: '用户名长度为3-20',
      trigger: 'blur',
    },
  ],
  password: [
    {
      required: true,
      message: '用户名不能为空',
      trigger: 'blur',
    },
    {
      min: 3,
      max: 20,
      message: '用户名长度为3-20',
      trigger: 'blur',
    },
  ],
};

export const createRule = {
  src: [
    {
      required: true,
      message: '图片地址不能为空',
      trigger: 'blur',
    },
  ],
};
