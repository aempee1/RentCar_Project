module.exports = ({ env }) => ({
  auth: {
    secret: env('9777631d0db2a37b54ecf26c3b6fc2f7f4e9f71face6a91f8ce99e300aa3aa9260bc2eb33c74c6e28ccd5d91acc059ed033baec16e0745946bba1b969b5e48b9b8e0cd20fcf34bfa338820f00ba63d7e716aed30535d54290ef8f5f5c139bd47ca6fca7ef5220013f8fab80b50c7238a00c97985fcc7f78b1c2953946a93cac5'),
  },
  apiToken: {
    salt: env('9777631d0db2a37b54ecf26c3b6fc2f7f4e9f71face6a91f8ce99e300aa3aa9260bc2eb33c74c6e28ccd5d91acc059ed033baec16e0745946bba1b969b5e48b9b8e0cd20fcf34bfa338820f00ba63d7e716aed30535d54290ef8f5f5c139bd47ca6fca7ef5220013f8fab80b50c7238a00c97985fcc7f78b1c2953946a93cac5'),
  },
  transfer: {
    token: {
      salt: env('9777631d0db2a37b54ecf26c3b6fc2f7f4e9f71face6a91f8ce99e300aa3aa9260bc2eb33c74c6e28ccd5d91acc059ed033baec16e0745946bba1b969b5e48b9b8e0cd20fcf34bfa338820f00ba63d7e716aed30535d54290ef8f5f5c139bd47ca6fca7ef5220013f8fab80b50c7238a00c97985fcc7f78b1c2953946a93cac5'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
