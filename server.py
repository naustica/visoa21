from flask import Flask
import os


dir = os.path.abspath(os.path.dirname(__file__))


def create_app():

    app = Flask(__name__,
                static_folder=os.path.join(dir, './public'),
                static_url_path='/')

    app.config['TESTING'] = False
    app.config['DEBUG'] = False
    app.config['HOST'] = '0.0.0.0'
    app.config['SECRET_KEY'] = 'visoa21'
    app.config['DEVELOPMENT'] = False

    @app.route('/')
    def index():
        return app.send_static_file('index.html'), 200

    return app


app = create_app()


if __name__ == '__main__':
    app.run()
