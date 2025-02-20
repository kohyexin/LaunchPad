export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS') || ["99f8f514e790a00461c3eb1d5eed4ea143937fe5ae4fc471802fca5e9f85ed534b4f6ee2d22c68eec0ef3dbf56a1767132b9b5d5a39899195233f9837e439c404e800baeb6f06f3c123bb4e363f0c0bbf59115c5a1bffb5f7ed026466f4e30288a4132a719d5c96510c623a20fdf449a36175ad28c93d3a57cb622362dcdbbc1"],
  },
});
