interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Team Member', 'Claims Adjuster'],
  tenantName: 'Business',
  applicationName: 'XactUnderstand',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage the business information',
    'Manage users',
    'Manage estimates',
    'Manage adjustments',
    'Manage teams',
    'Manage team members',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/157911fa-a2c1-4bf6-8db6-97a3b2695d9c',
};
