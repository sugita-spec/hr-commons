export type EventItem = {
  slug: string;
  date: string;
  dateLabel: string;
  day: string;
  time: string;
  format: string;
  status: string;
  tag: string;
  title: string;
  description: string;
  capacity: string;
  speaker: {
    name: string;
    role: string;
    initials: string;
    color: string;
  };
};

export const events: EventItem[] = [
  {
    slug: "candidate-experience",
    date: "2026-10-16",
    dateLabel: "10.16",
    day: "FRI",
    time: "19:00–21:00",
    format: "東京・渋谷 / オフライン",
    status: "受付中",
    tag: "SELECTION DESIGN",
    title: "母集団形成に頼らない、選考体験の改善",
    description: "候補者との接点を見直し、選ばれる選考体験をどう設計するか。実例を持ち寄る少人数セッションです。",
    capacity: "定員12名",
    speaker: {
      name: "水野 紗季",
      role: "SaaS企業 人事責任者",
      initials: "SM",
      color: "blue",
    },
  },
  {
    slug: "hiring-manager",
    date: "2026-11-12",
    dateLabel: "11.12",
    day: "THU",
    time: "19:00–21:00",
    format: "オンライン",
    status: "受付中",
    tag: "TEAM BUILDING",
    title: "現場を巻き込む採用設計",
    description: "採用を人事だけの仕事にしないために。現場との役割分担や合意形成のリアルを共有します。",
    capacity: "定員16名",
    speaker: {
      name: "高橋 直人",
      role: "IT企業 採用マネージャー",
      initials: "NT",
      color: "lime",
    },
  },
  {
    slug: "recruitment-branding",
    date: "2026-12-03",
    dateLabel: "12.03",
    day: "THU",
    time: "19:00–20:30",
    format: "オンライン",
    status: "近日受付",
    tag: "EMPLOYER BRANDING",
    title: "採用広報の成果をどう測るか",
    description: "記事やイベントを「やりっぱなし」にしないための指標設計と、社内への説明方法を考えます。",
    capacity: "定員20名",
    speaker: {
      name: "森田 彩",
      role: "スタートアップ HRBP",
      initials: "AM",
      color: "coral",
    },
  },
];

export const getEvent = (slug: string) => events.find((event) => event.slug === slug);
