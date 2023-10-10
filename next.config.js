/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			"cloud.ryanscomputers.com",
			"www.cloud.ryanscomputers.com",
			"images.pexels.com",
		], // Add the hostname here
	},
};

module.exports = nextConfig;
