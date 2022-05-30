/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},
	env: {
		VIN_API_KEY: process.env.VIN_API_KEY,
		VIN_API_ID: process.env.VIN_API_ID,
		CLOUDINARY_CLOUD: process.env.CLOUDINARY_CLOUD,
		CLOUDINARY_PRESET: process.env.CLOUDINARY_PRESET,
	},
	images: {
		domains: ['res.cloudinary.com', 'images.unsplash.com'],
	},
};

module.exports = nextConfig;
