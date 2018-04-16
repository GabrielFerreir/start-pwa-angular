CREATE FUNCTION insertuser(pname character varying, pemail character varying)
  RETURNS json
LANGUAGE plpgsql
AS $$
BEGIN
  IF EXISTS(SELECT id
            FROM users
            WHERE email ILIKE pEmail)
  THEN
    RETURN
    json_build_object(
      'executionCode', 1,
      'message', 'Email já possui cadastro'
    );
  END IF;

  INSERT INTO users (name, email) VALUES (pName, pEmail);

  RETURN
  json_build_object(
    'executionCode', 0,
    'message', 'OK'
  );
END;
$$;

SELECT * FROM insertuser('Rafael', 'rafael@hotmail.com')



CREATE FUNCTION selectusers()
  RETURNS json
LANGUAGE plpgsql
AS $$
DECLARE
  vValue JSON;
  vTotal INTEGER;

BEGIN
  vValue := jsonb_agg(o) FROM (
  SELECT * FROM users)o;

  SELECT COUNT(id) FROM users INTO vTotal;

  RETURN
  json_build_object(
    'content', vValue,
    'totalLinhas', vTotal
  );
END;
$$;

SELECT * FROM selectusers()

