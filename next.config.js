/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},
};

module.exports = {
	nextConfig,
	env: {
		VIN_API_KEY: process.env.VIN_API_KEY,
		VIN_API_ID: process.env.VIN_API_ID,
	},
};
