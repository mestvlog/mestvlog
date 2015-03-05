createServiceConfiguration = function(service, clientId, secret) {
  var config;
  ServiceConfiguration.configurations.remove({
    service: service
  });
  config = {
    generic: {
      service: service,
      clientId: clientId,
      secret: secret
    },
    facebook: {
      service: service,
      appId: clientId,
      secret: secret
    },
    twitter: {
      service: service,
      consumerKey: clientId,
      secret: secret
    }
  };
  switch (service) {
    case 'facebook':
      return ServiceConfiguration.configurations.insert(config.facebook);
    case 'twitter':
      return ServiceConfiguration.configurations.insert(config.twitter);
    default:
      return ServiceConfiguration.configurations.insert(config.generic);
  }
};

createServiceConfiguration('facebook', '896269383756719', 'c0c85bfb203090bda5187ec315b03d5b')
createServiceConfiguration('github', 'Insert your clientId here.', 'Insert your secret here.')
createServiceConfiguration('google', '1097908506781-bvt7u05iba4v561sr0ptflvvtkm7pjh8.apps.googleusercontent.com', 'wfzegZC830Qg7HwPFIkJYzQf')
createServiceConfiguration('twitter', 'peZemNLQQS354SVugsWfxS2wx', 'SFL8jr2MvDSswGGibUN04latzwsvcC84xknfwUn9wVH16oAFYk')

Accounts.config({ 
  restrictCreationByEmailDomain: 'meltwater.org'
 })
