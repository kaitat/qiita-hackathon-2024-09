-- name: createUsers :exec
INSERT INTO Users (id, name) VALUES (@id, @name);

-- name: getUser :one
SELECT * FROM Users WHERE name = @name;

-- name: getQuestions :many
SELECT * FROM Questions order by order_num asc;

-- name: getQuestionByOrderNum :one
SELECT * FROM Questions WHERE order_num = @order_num;

-- name: getRoomById :one
SELECT * FROM Rooms AS room WHERE id = @id;

-- name: getRoomsByOwnerId :many
SELECT * FROM Rooms AS room WHERE owner_id = @owner_id;

-- name: createRoom :exec
INSERT INTO Rooms (id, name, owner_id, member_id) VALUES (@id, @name, @owner_id, @member_id);

-- name: getMessagesByRoomId :many
SELECT * FROM Messages WHERE room_id = @room_id order by created_at asc;

-- name: createMessage :exec
INSERT INTO Messages (id, room_id, user_id, message, message_type) VALUES (@id, @room_id, @user_id, @message, @message_type);

-- name: createAnswer :exec
INSERT INTO Answers (id, user_id, question_id, answer) VALUES (@id, @user_id, @question_id, @answer);

-- name: getUsers :many
SELECT * FROM Users order by created_at asc;

-- name: getUserById :one
SELECT * FROM Users WHERE id = @id;

-- name: updateUserImageUrl :exec
UPDATE Users SET image_url = @image_url WHERE id = @id;

-- name: getAnswersByUserId :many
SELECT * FROM Answers WHERE user_id = @user_id;

-- name: createPersonality :exec
INSERT INTO Personalities (id, user_id, openness, conscientiousness, extraversion, agreeableness, neuroticism, description, description_en) VALUES (@id, @user_id, @openness, @conscientiousness, @extraversion, @agreeableness, @neuroticism, @description, @description_en);

-- name: getPersonalityByUserId :one
SELECT * FROM Personalities WHERE user_id = @user_id;

-- name: getRoomByOwnerIdAndMemberId :one
SELECT * FROM Rooms WHERE owner_id = @owner_id AND member_id = @member_id;
