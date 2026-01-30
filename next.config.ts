import type { NextConfig } from "next";

const securityHeaders = [
  {
    // HTTPS接続を強制（HSTS）
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains',
  },
  {
    // XSS攻撃防止
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    // クリックジャッキング防止
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    // Referrer情報の制限
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    // 権限ポリシー
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // 全ルートにセキュリティヘッダーを適用
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
