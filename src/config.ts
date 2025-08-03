import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

// 站点全局配置，定义网站的基本信息、主题、横幅、目录等
export const siteConfig: SiteConfig = {
	// 网站标题，显示在浏览器标签和页面顶部
	title: "小洪的博客",
	// 网站副标题，显示在标题下方
	subtitle: "2025",
	// 网站语言，支持多种语言选项，如 'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th', 'vi'
	lang: "zh_CN",
	// 主题颜色配置
	themeColor: {
		// 主题色调，范围 0-360，例如红色: 0，青色: 200，粉色: 345
		hue: 250,
		// 是否固定主题颜色，设为 true 则隐藏访客的主题颜色选择器
		fixed: false,
	},
	// 横幅（banner）配置
	banner: {
		// 是否启用横幅
		enable: true,
		// 横幅图片路径，相对于 /src 目录，若以 '/' 开头则相对于 /public 目录
		src: "assets/images/海.png",
		// 横幅图片位置，仅支持 'top', 'center', 'bottom'，默认 'center'
		position: "center",
		// 横幅图片版权信息
		credit: {
			// 是否显示版权文本
			enable: false,
			// 版权文本内容
			text: "空色天絵 都市探訪少女",
			// 版权链接（可选），指向原图或作者页面
			url: "https://www.pixiv.net/artworks/126414579",
		},
	},
	// 目录（Table of Contents）配置
	toc: {
		// 是否在文章右侧显示目录
		enable: true,
		// 目录显示的最大标题层级，范围 1-3
		depth: 2,
	},
	// 网站图标（favicon）配置
	favicon: [
		// 留空数组以使用默认 favicon
		// 示例配置：
		// {
		//   src: '/favicon/icon.png',    // favicon 路径，相对于 /public 目录
		//   theme: 'light',              // 可选，'light' 或 'dark'，用于支持不同模式的 favicon
		//   sizes: '32x32',              // 可选，favicon 尺寸，适用于不同尺寸的图标
		// }
	],
};

// 导航栏配置，定义顶部导航链接
export const navBarConfig: NavBarConfig = {
	links: [
		// 预定义链接：主页
		LinkPreset.Home,
		// 预定义链接：归档页面
		LinkPreset.Archive,
		// 预定义链接：关于页面
		LinkPreset.About,
		// 自定义链接：GitHub
		{
			// 链接名称，显示在导航栏
			name: "GitHub",
			// 链接地址，内部链接不需要包含基础路径（自动添加）
			url: "https://github.com/saicaca/fuwari",
			// 是否为外部链接，true 时显示外部链接图标并在新标签页打开
			external: true,
		},
	],
};

// 个人资料配置，定义作者信息和社交链接
export const profileConfig: ProfileConfig = {
	// 头像图片路径，相对于 /src 目录，若以 '/' 开头则相对于 /public 目录
	avatar: "assets/images/demo-avatar.png",
	// 作者名称，显示在个人资料区域
	name: "小洪",
	// 作者简介，显示在个人资料区域
	bio: "持续学习~",
	// 社交链接列表
	links: [
		{
			// 链接名称
			name: "Twitter",
			// 图标代码，参考 https://icones.js.org/ 获取
			// 需要安装对应的图标集，例如 `pnpm add @iconify-json/fa6-brands`
			icon: "fa6-brands:twitter",
			// 链接地址
			url: "https://x.com/hongting656388",
		},
		{
			// 链接名称
			name: "Steam",
			// Steam 图标
			icon: "fa6-brands:steam",
			// 链接地址
			url: "https://store.steampowered.com",
		},
		{
			// 链接名称
			name: "GitHub",
			// GitHub 图标
			icon: "fa6-brands:github",
			// 链接地址
			url: "https://github.com/hongting2025",
		},
	],
};

// 许可证配置，定义网站内容的版权信息
export const licenseConfig: LicenseConfig = {
	// 是否启用许可证信息
	enable: true,
	// 许可证名称
	name: "CC BY-NC-SA 4.0",
	// 许可证链接，指向详细说明页面
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

// Expressive Code 插件配置，用于代码块高亮显示
export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// 代码块主题，选择暗色主题以匹配博客的暗色背景
	// 注意：部分样式（如背景色）可能在 astro.config.mjs 中被覆盖
	theme: "github-dark",
};