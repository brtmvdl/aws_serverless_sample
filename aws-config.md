
Group name:
br-<user-iam-id>-users-group-1

User name:
br-<user-iam-id>-user-1

Bucket Name:
br-<user-iam-id>-bucket-1

Bucket Key Name:
/data/seller/{id}


Policy name:
br-<user-iam-id>-users-policy-1

{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
                "iam:GetRole",
                "iam:CreatePolicy",
                "iam:CreateRole",
                "iam:AttachRolePolicy",
                "s3-object-lambda:*",
                "cloudformation:*",
                "apigateway:*",
                "lambda:*",
                "s3:*"
            ],
            "Resource": "*"
        },
        {
            "Sid": "VisualEditor1",
            "Effect": "Allow",
            "Action": [
                "iam:PassRole"
            ],
            "Resource": "arn:aws:iam::<user-iam-id>:role/service-role/br-*"
        }
    ]
}

Lambda function name:
br-<user-iam-id>-lambda-function-1
