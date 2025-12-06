// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = {
	[categoryName: string]: Device[];
} & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	OnePlus: [
		{
			name: "OnePlus ACE 2 PRO",
			image: "/images/device/oneplus ace 2 pro.png",
			specs: "Green/16G +512GB",
			description: "Reconstructing performance imagination.",
			link: "https://www.oneplus.com/cn/ace-2-pro",
		},
	],
	MiniPC: [
		{
			name: "AOOSTAR GEM 12 MAX",
			image: "/images/device/AOOSTAR GEM12 MAX.png",
			specs: "Black/R7-8745HS/32GB/1TB",
			description: "Powerful Performance - Mini But Mighty!",
			link: "https://www.sztbkj.com/minipc/pc-16",
		},
	],
	Laptop: [
		{
			name: "ASUS TX GAMING FA608PM",
			image: "/images/device/ASUS TX GAMING FA608PM.png",
			specs: "Green/R9-8940HX/RTX 5060 Laptop/16GB/2TB",
			description: "No Game No Life.",
			link: "https://www.asus.com.cn/laptops/for-gaming/tuf-gaming/asus-tuf-gaming-a16-2025/",
		},
	],
};
