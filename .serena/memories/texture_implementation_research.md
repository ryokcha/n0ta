# スケッチブック質感実装方法 - 調査レポート

## プロジェクト文脈
- **フレームワーク**: Next.js 16.0.1 + React 19.2.0
- **スタイリング**: Tailwind CSS 4 + PostCSS
- **言語**: TypeScript (strict mode)
- **App Router**: 使用中
- **既存UI**: シンプルで統一感のある設計

---

## 実装方法の比較一覧

### 1. SVGフィルター（推奨）
**技術内容**:
- `feTurbulence`で手続き型ノイズ（Perlin noise）生成
- `feDisplacementMap`で歪み効果を追加
- CSS data URIで埋め込み可能

**メリット**:
- 実装が簡潔でファイルサイズが小さい
- パラメータ調整で細かい制御が可能
- 外部ファイルが不要（インライン化可能）
- ブラウザサポートが広い
- Next.jsとの統合が容易

**デメリット**:
- ブラウザごとのレンダリング差異がある可能性
- 複雑な効果は難しい
- アニメーション化は別途実装必要

**実装難易度**: 低〜中
**パフォーマンス**: 優秀（GPU加速対応）
**Web Vitals影響**: ほぼなし

**パラメータ調整例**:
- baseFrequency: 0.001-1 (低い値 = 大きなパターン)
- numOctaves: 1-4 (オクターブ数 = 詳細さ)
- type: fractalNoise / turbulence

---

### 2. CSS + 画像ベースのテクスチャ
**技術内容**:
- PNG/WebPテクスチャ画像をbackground-imageで適用
- Tailwind CSSのカスタム値で管理

**メリット**:
- 最もシンプルで確実
- デザイナーの細かいコントロール可能
- Next.js Image Optimizationで自動最適化
- ブラウザサポート完全

**デメリット**:
- 追加ファイルが必要（HTTP リクエスト増加）
- ファイルサイズ管理が必要
- CSS backgroundは next/image で最適化されない
- スケーラビリティに限界

**実装難易度**: 低
**パフォーマンス**: 良好（テクスチャサイズに依存）
**Web Vitals影響**: 最小限

**最適化方法**:
- WebP形式で提供
- 小さなサイズで タイル化
- 圧縮率を上げる

---

### 3. Canvas + Perlin Noise
**技術内容**:
- JavaScriptで手続き型生成
- HTML5 Canvas API使用
- リアルタイム生成または事前生成

**メリット**:
- 完全なプログラマティック制御
- 動的アニメーション化が容易
- CPU使用で複雑な効果が可能

**デメリット**:
- 初期化時に計算コスト高い
- SSRとの相性が悪い（Next.js問題）
- ファイルサイズが大きい（ライブラリ+コード）
- ブラウザ間のパフォーマンス差異大

**実装難易度**: 中〜高
**パフォーマンス**: 中程度（動的生成は CPU負荷）
**Web Vitals影響**: あり（LCP, FID に影響可能）

**ライブラリ**:
- simplex-noise: 軽量なノイズ実装
- toxiclibsjs: 充実した機能

---

### 4. Rough.js（手描き風UI）
**技術内容**:
- スケッチ風グラフィックスライブラリ
- Canvas または SVG レンダリング対応
- UI要素全体に手描き感を適用

**メリット**
- 遊び心のあるUI実装に最適
- テーマにぴったり
- ライブラリサイズが小さい（9KB gzip）
- React互換（rough-react-wrapper パッケージ）

**デメリット**:
- UIコンポーネント全体への適用が必要
- 既存UIの大幅変更が必要
- 後付けは難しい

**実装難易度**: 中
**パフォーマンス**: 良好
**Web Vitals影響**: 最小限

**利用可能パッケージ**:
- rough-react-wrapper: React統合用
- @recklyss/hand-drawn-ui: React UI ライブラリ
- Wired Elements: Web Components

---

### 5. WebGL/Three.js
**技術内容**:
- VFX-JSやThree.jsを使用した高度なエフェクト
- GPUアクセラレーション

**メリット**:
- 最高のパフォーマンス（GPU処理）
- 複雑な効果が可能
- アニメーション化が容易

**デメリット**:
- 実装複雑度が高い
- ライブラリサイズが大きい
- Next.js SSRとの相性問題
- 過度な仕様（ポートフォリオには不要）

**実装難易度**: 高
**パフォーマンス**: 優秀（GPU活用）
**Web Vitals影響**: 可能性あり（初期化時）

**ライブラリ**:
- VFX-JS: DOM要素へのエフェクト適用
- Three.js + react-three-fiber: 完全な制御

---

### 6. Tailwind CSS カスタムプラグイン
**技術内容**:
- Tailwind設定にカスタムfilter/backdrop-filterを追加
- 既存のbackdrop-filterユーティリティを拡張

**メリット**:
- Tailwindエコシステムに統合
- 開発効率が良い
- 他の方法と組み合わせ可能

**デメリット**:
- 単独では質感生成不可（他の方法と組み合わせ必要）
- 効果的な使用には他の実装と併用

**実装難易度**: 低
**パフォーマンス**: 優秀
**Web Vitals影響**: なし

---

## Next.jsプロジェクトに最適な実装方法

### 最優先: SVGフィルター + 画像テクスチャのハイブリッド
**理由**:
1. Next.jsとの相性が最高（SSRサポート）
2. パフォーマンスが優秀（Web Vitals対応）
3. 実装難易度が低い
4. ファイルサイズが小さい
5. スケーラビリティに優れている

**実装戦略**:
- グローバルなスケッチブック質感: SVG feTurbulence (data URI)
- 部分的な細かいテクスチャ: WebP画像 (Tailwind カスタムクラス)
- ボタン・強調要素: Rough.js (オプション)

---

## パフォーマンス比較表

| 方法 | 初期化 | 実行時 | ファイルサイズ | Web Vitals | SSR対応 | 学習曲線 |
|------|-------|--------|----------------|-----------|--------|--------|
| SVG filter | 低 | 低 | 小 | ○ | ○ | 低 |
| 画像テクスチャ | 低 | 低 | 中 | ◎ | ○ | 低 |
| Canvas | 中 | 中 | 中 | △ | △ | 中 |
| Rough.js | 低 | 中 | 小 | ○ | ○ | 中 |
| WebGL | 高 | 低 | 大 | △ | △ | 高 |

---

## 推奨実装手順

1. **段階1**: SVG feTurbulenceをグローバルbackgroundに適用
2. **段階2**: Tailwindカスタムプラグインで texture-sketchy クラス作成
3. **段階3**: 部分的なテクスチャ画像を追加（必要に応じて）
4. **段階4**: Rough.jsでアクセント要素に手描き感を追加（オプション）

---

## 具体的なコード例

### SVG feTurbulence (推奨)
```css
/* globals.css に追加 */
body {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><defs><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="4" /></filter></defs><rect width="100%" height="100%" fill="white" filter="url(%23noise)" opacity="0.03"/></svg>');
  background-repeat: repeat;
}
```

### Tailwind カスタムテクスチャクラス
```js
// tailwind.config.ts
export default {
  theme: {
    extend: {
      backgroundImage: {
        'sketchy-texture': 'url(data:image/svg+xml;...)',
      }
    }
  }
}
```

### Rough.js (オプション)
```bash
npm install --save roughjs rough-react-wrapper
```

---

## 結論

このプロジェクトでは **SVGフィルター + 画像テクスチャのハイブリッド** が最適。
- 実装が簡潔
- パフォーマンスが優秀
- Next.js との完全互換
- Web Vitals に対応
- ランニングコストが低い
