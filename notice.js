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
	{date: '2025-09-14', text: 'セール 9/9 12:00-9/14 [3周年]',
	 kind: NOTICE_CATEGORIES.SALE.code,
	 start: '2025-09-09',
	 url: 'https://x.com/palmu_jp/status/1965007210490273966'},
	{date: '2025-09-14', text: '3周年記念YouTubeライブ 14:00-',
	 kind: NOTICE_CATEGORIES.SPECIAL.code,
	 url: 'https://x.com/palmu_jp/status/1963844546569093443'},
];


