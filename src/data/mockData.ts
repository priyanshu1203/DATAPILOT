import type { KPICardData, RevenueDataPoint, TrafficSource, AIInsight, ActivityItem, ProductFeature, HowItWorksStep } from '../types';

export const MOCK_KPIS: KPICardData[] = [
  {
    title: 'Revenue',
    value: '$84,240',
    change: '+18.4%',
    isPositive: true,
    period: 'vs. last month',
    iconName: 'DollarSign',
  },
  {
    title: 'Conversion Rate',
    value: '4.82%',
    change: '+1.2%',
    isPositive: true,
    period: 'vs. last month',
    iconName: 'TrendingUp',
  },
  {
    title: 'Active Users',
    value: '12,480',
    change: '+8.6%',
    isPositive: true,
    period: 'vs. last month',
    iconName: 'Users',
  },
  {
    title: 'Growth',
    value: '+18.4%',
    change: '+3.1%',
    isPositive: true,
    period: 'vs. last month',
    iconName: 'Zap',
  },
];

export const MOCK_REVENUE_TREND: RevenueDataPoint[] = [
  { date: 'Jan 1', revenue: 48500, previousPeriod: 42000, projected: 50000 },
  { date: 'Jan 5', revenue: 52100, previousPeriod: 44500, projected: 53000 },
  { date: 'Jan 10', revenue: 58400, previousPeriod: 48000, projected: 57500 },
  { date: 'Jan 15', revenue: 64200, previousPeriod: 51200, projected: 63000 },
  { date: 'Jan 20', revenue: 71900, previousPeriod: 56000, projected: 70000 },
  { date: 'Jan 25', revenue: 78500, previousPeriod: 61800, projected: 77000 },
  { date: 'Jan 30', revenue: 84240, previousPeriod: 68100, projected: 82000 },
];

export const MOCK_TRAFFIC_SOURCES: TrafficSource[] = [
  { name: 'Organic Search', percentage: 44.5, conversions: 5553, color: '#3b82f6' },
  { name: 'Direct Traffic', percentage: 28.2, conversions: 3519, color: '#10b981' },
  { name: 'Referral & Social', percentage: 17.8, conversions: 2221, color: '#8b5cf6' },
  { name: 'Paid Campaigns', percentage: 9.5, conversions: 1187, color: '#f59e0b' },
];

export const MOCK_AI_INSIGHTS: AIInsight[] = [
  {
    id: 'insight-1',
    title: 'Organic Search Growth Driver',
    summary: 'Organic traffic is driving the strongest conversion growth this month.',
    detailedAnalysis: 'Organic search conversions rose by +24.8% following the launch of technical documentation. Visitor retention from Google search leads is 3.2x higher than paid campaigns.',
    impact: 'High',
    metricAffected: 'Conversion Rate',
    timestamp: '2 hours ago',
    confidenceScore: 96,
    actionableStep: 'Double down on technical blog content and expand documentation keyword coverage.'
  },
  {
    id: 'insight-2',
    title: 'Monthly Revenue Surge',
    summary: 'Revenue increased 18.4% compared with the previous period.',
    detailedAnalysis: 'Expansion ARR from team tier upgrades contributed $12,400 of the total $84,240 revenue. Churn rate dropped to an all-time low of 0.8%.',
    impact: 'Positive',
    metricAffected: 'MRR / Revenue',
    timestamp: '5 hours ago',
    confidenceScore: 98,
    actionableStep: 'Automate product-led upgrade prompts for accounts reaching 80% usage limits.'
  },
  {
    id: 'insight-3',
    title: 'Checkout Friction Reduction',
    summary: 'Checkout completion speed improved by 1.2s following recent funnel update.',
    detailedAnalysis: 'Dropping redundant form fields in step 2 yielded a +3.4% reduction in cart abandonment across mobile device sessions.',
    impact: 'Optimization',
    metricAffected: 'Checkout Completion',
    timestamp: '1 day ago',
    confidenceScore: 92,
    actionableStep: 'Apply one-click checkout options for returning visitors.'
  }
];

export const MOCK_ACTIVITIES: ActivityItem[] = [
  { id: 'act-1', event: 'Stripe integration synced 1,420 transactions', user: 'System Sync', time: '10m ago', type: 'integration' },
  { id: 'act-2', event: 'Anomaly alert resolved: Mobile signup spike', user: 'AI Engine', time: '42m ago', type: 'alert' },
  { id: 'act-3', event: 'Weekly Performance Report generated', user: 'Automated Bot', time: '2h ago', type: 'report' },
  { id: 'act-4', event: 'PostgreSQL database connected', user: 'Alex Mercer', time: '4h ago', type: 'user' },
];

export const MOCK_FEATURES: ProductFeature[] = [
  {
    id: 'feat-1',
    title: 'AI-Powered Insights',
    description: 'Find important changes and patterns without digging through endless dashboards.',
    icon: 'Sparkles',
    badge: 'Automated',
    metric: 'Instant Anomaly Detection'
  },
  {
    id: 'feat-2',
    title: 'Real-Time Analytics',
    description: 'Monitor the metrics that matter and understand how they change over time.',
    icon: 'Activity',
    badge: 'Live',
    metric: '< 100ms Latency'
  },
  {
    id: 'feat-3',
    title: 'Automated Reports',
    description: 'Turn recurring analysis into clear reports your team can actually use.',
    icon: 'FileText',
    badge: 'Scheduled',
    metric: 'Slack & Email Delivery'
  },
  {
    id: 'feat-4',
    title: 'Data Integrations',
    description: 'Bring your business data together in one place.',
    icon: 'Database',
    badge: '50+ Connectors',
    metric: 'Zero-Code Setup'
  }
];

export const MOCK_HOW_IT_WORKS: HowItWorksStep[] = [
  {
    step: '01',
    title: 'Connect your data',
    description: 'Bring your existing business data into DataPilot.',
    details: [
      'Connect Stripe, Google Analytics, PostgreSQL, and Mixpanel in 2 clicks',
      'Encrypted read-only data synchronization',
      'No complex ETL or data engineering required'
    ],
    visualType: 'connect'
  },
  {
    step: '02',
    title: 'Understand what changed',
    description: 'DataPilot highlights trends, anomalies, and important changes.',
    details: [
      'Automatic root-cause analysis for metric drops or spikes',
      'Context-aware AI narrative breakdowns',
      'Filtered noise so you focus only on high-impact shifts'
    ],
    visualType: 'analyze'
  },
  {
    step: '03',
    title: 'Take action',
    description: 'Use clear insights to decide what to do next.',
    details: [
      'Share automated executive summaries with team leads',
      'Export clear data visualizations directly into pitch decks',
      'Track decision outcomes over time'
    ],
    visualType: 'act'
  }
];

export const SAMPLE_SHOWCASE_TABLE = [
  { id: 'INV-8821', customer: 'Acme Corp', plan: 'Enterprise', mrr: '$1,200', status: 'Active', growth: '+14%', region: 'North America' },
  { id: 'INV-8822', customer: 'Starlight Labs', plan: 'Pro Team', mrr: '$450', status: 'Active', growth: '+28%', region: 'Europe' },
  { id: 'INV-8823', customer: 'HyperScale AI', plan: 'Enterprise', mrr: '$2,400', status: 'Upgraded', growth: '+110%', region: 'Asia Pacific' },
  { id: 'INV-8824', customer: 'Nexus Systems', plan: 'Starter', mrr: '$120', status: 'Active', growth: '+5%', region: 'North America' },
  { id: 'INV-8825', customer: 'Vanguard Health', plan: 'Pro Team', mrr: '$890', status: 'Active', growth: '+42%', region: 'Europe' },
];
