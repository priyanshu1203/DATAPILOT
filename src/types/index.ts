export interface KPICardData {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  period: string;
  iconName: 'DollarSign' | 'TrendingUp' | 'Users' | 'Zap';
}

export interface RevenueDataPoint {
  date: string;
  revenue: number;
  previousPeriod: number;
  projected?: number;
}

export interface TrafficSource {
  name: string;
  percentage: number;
  conversions: number;
  color: string;
}

export interface AIInsight {
  id: string;
  title: string;
  summary: string;
  detailedAnalysis: string;
  impact: 'High' | 'Medium' | 'Positive' | 'Optimization';
  metricAffected: string;
  timestamp: string;
  confidenceScore: number;
  actionableStep: string;
}

export interface ActivityItem {
  id: string;
  event: string;
  user: string;
  time: string;
  type: 'alert' | 'integration' | 'report' | 'user';
}

export interface ProductFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  badge?: string;
  metric?: string;
}

export interface HowItWorksStep {
  step: string;
  title: string;
  description: string;
  details: string[];
  visualType: 'connect' | 'analyze' | 'act';
}

export interface NavigationItem {
  label: string;
  href: string;
}
