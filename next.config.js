/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "www.elockertechnologies.com"],
  },
  async redirects() {
    return [
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/services/digital-marketing-services',
        destination: '/services/digital-marketing',
        permanent: true,
      },
      {
        source: '/product/employee-tracking-and-productivity-software',
        destination: '/product/time-tracking-productivity',
        permanent: true,
      },
      {
        source: '/the-top-5-advantages-of-implementing-a-payroll-system',
        destination: '/blog/the-top-5-advantages-of-implementing-a-payroll-system',
        permanent: true,
      },
      {
        source: '/10-reasons-why-your-school-needs-enrollment-software',
        destination: '/blog/10-reasons-why-your-school-needs-enrollment-software',
        permanent: true,
      },
      {
        source: '/get-a-cloud-backup-before-its-too-late',
        destination: '/blog/get-a-cloud-backup-before-its-too-late',
        permanent: true,
      },
      {
        source: '/office-365',
        destination: '/blog/office-365',
        permanent: true,
      },
      {
        source: '/why-g-suite-for-your-business',
        destination: '/blog/why-g-suite-for-your-business',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
