import time
import RPi.GPIO as GPIO
GPIO.setmode(GPIO.BCM)
GPIO.setup(18, GPIO.OUT)
GPIO.output(18, True)
GPIO.output(18, False)
GPIO.setup(23, GPIO.OUT)
GPIO.output(23, True)
GPIO.output(23, False)
fan_pin=18
motor_pin=23

try:
	while True:
		GPIO.output(motor_pin, True)
		GPIO.output(fan_pin, True) #Should turn fan on
		time.sleep(0.5)
		GPIO.output(motor_pin, False)
		GPIO.output(fan_pin, False)
		time.sleep(0.5)
finally:
	print("Cleaning up")
	GPIO.cleanup()