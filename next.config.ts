import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  images: {
    remotePatterns : [
      {
        hostname : "80go3ynwmd.ufs.sh"
      }
    ]
  },

  /* config options here */
};

export default withFlowbiteReact(nextConfig);