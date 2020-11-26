if Rails.env === 'production' 
  Rails.application.config.session_store :cookie_store, key: '_should-i', domain: 'should-i-json-api'
else
  Rails.application.config.session_store :cookie_store, key: '_should-i'
end