// Palmu 公式のお知らせ情報
/* exported PALMU_NOTICES */
const NOTICE_CATEGORIES = Object.freeze({
	SALE: { code: 'sale', name: 'セール' },
	MAINTENANCE: { code: 'maintenance', name: 'メンテナンス' },
	SPECIAL: { code: 'special', name: '特別企画' },
	PALHUB: { code: 'PalHub', name: 'PalHub' },
});


window.PALMU_NOTICES = [
	{date: '2025-08-24T14:30', text: 'PalHub 14:00-14:30',
	 kind: NOTICE_CATEGORIES.PALHUB.code,
	 url: 'https://x.com/palmu_jp/status/1957763773932130628'},
	{date: '2025-08-26T15:20', text: 'メンテ 14:00-15:30 [FB条件3，表示タブ，PayPay]',
	 kind: NOTICE_CATEGORIES.MAINTENANCE.code,
	 url: 'https://x.com/palmu_jp/status/1958740914500735062'},
	{date: '2025-08-31', text: 'セール 8/25-8/31 [777, 1.24]',
	 kind: NOTICE_CATEGORIES.SALE.code,
	 url: 'https://x.com/palmu_jp/status/1959088203040002408'},
	{date: '2025-09-01', text: 'ユーザランクが14ランクに',
	 kind: NOTICE_CATEGORIES.MAINTENANCE.code,
	 url: 'https://x.com/palmu_jp/status/1948548755935969349'},
	{date: '2025-09-03', text: 'セール 8/27 19:00-9/03 [team, 1.24]',
	 kind: NOTICE_CATEGORIES.SALE.code,
	 start: '2025-08-27',
	 url: 'https://x.com/palmu_jp/status/1960583057443852404'},
	{date: '2025-09-10', text: '祝3周年',
	 kind: NOTICE_CATEGORIES.SPECIAL.code,
	 url: 'https://x.com/palmu_jp/status/1965429995917955561'},
	{date: '2025-09-10', text: 'シャンパンタイム 9/10 18:00-24:00 のうち120分[達成型/申込不要]',
	 kind: NOTICE_CATEGORIES.SPECIAL.code,
	 url: 'https://x.com/palmu_jp/status/1962840429537407343'},
	{date: '2025-09-14', text: 'セール 9/9 12:00-9/14 [3周年, 1.25]',
	 kind: NOTICE_CATEGORIES.SALE.code,
	 start: '2025-09-09',
	 links: [{label: "SS", file: "sales/sale20250909.png"}],
	 url: 'https://x.com/palmu_jp/status/1965007210490273966'},
	{date: '2025-09-14', text: '3周年記念YouTubeライブ 14:00-16:00',
	 kind: NOTICE_CATEGORIES.SPECIAL.code,
	 url: 'https://x.com/palmu_jp/status/1965701789589602491'},
	{date: '2025-09-16', text: 'メンテ 14:00-15:30 [生年月日登録,購入エラー]',
	 kind: NOTICE_CATEGORIES.MAINTENANCE.code,
	 links: [
		 {label: "月次累計FB表記", url: "https://x.com/palmu_jp/status/1963920046993883455"},
		 {label: "リスナー称号", url: "https://x.com/palmu_jp/status/1966758753942073825"},
	 ],
	 url: 'https://x.com/palmu_jp/status/1966411469467299938'},
	{date: '2025-09-28', text: 'たいむギフト復刻コレクション 9/20-9/28',
	 kind: NOTICE_CATEGORIES.SPECIAL.code,
	 start: '2025-09-18',
	 url: 'https://x.com/palmu_jp/status/1966426573189325084'},
];


