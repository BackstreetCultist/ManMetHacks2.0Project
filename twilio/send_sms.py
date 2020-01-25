# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'AC5939b954c24cb577caa74dd703170f63'
auth_token = '304534b495312c10ae09e69131970921'
client = Client(account_sid, auth_token)

message = client.messages \
                .create(
                     body="109 in the sky but the pigs won't quit",
                     from_='+12014743543',
                     to='+447871239341'
                 )

print(message.sid)