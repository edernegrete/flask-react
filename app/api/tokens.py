from flask import jsonify, g
from app import db
from app.api import bp
from app.api.auth import basic_auth

@bp.route('/tokens', methods=['POST'])
@basic_auth.login_required
def get_token():
    token = g.current_user.get_token()
    db.session.commit()
    response = jsonify({'token': token})
    response.status_code = 200
    response.headers['Access-Control-Allow-Headers'] = 'Authorization'
    return response

    