

※mqttにて、しばらく4.0.0 を使います。
https://github.com/mqttjs/MQTT.js/issues/1113


$ npm install -g mqtt@v4.0.0

送信例：
$ mqtt pub -t 'hello' -h 'test.mosquitto.org' -m '{"hello world!"}'
$ mqtt pub -t 'hello' -h 'test.mosquitto.org' -m '{"hello IKI!"}'

