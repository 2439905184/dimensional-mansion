<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>新闻展示</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
        }
        h2 {
            color: #333;
        }
        textarea {
            width: 100%;
            height: 500px;
            border: 1px solid #ccc;
            padding: 10px;
            font-family: Consolas, monospace;
            background-color: #f9f9f9;
            border-radius: 4px;
        }
    </style>
</head>
<body>
    <?php
        // 安全获取 GET 参数，确保值存在
        $title = htmlspecialchars($_GET['title'] ?? '', ENT_QUOTES, 'UTF-8');
        $content = urldecode($_GET['content'] ?? ''); // 先解码
    ?>
    <!-- 可视化渲染 HTML 内容（如图片、段落等） -->
    <div style="margin-top: 20px; border: 1px solid #ddd; padding: 15px; background-color: #fff;">
        <?php echo $content; ?>
    </div>
    <!-- 可选择：加一个返回链接 -->
    <p style="margin-top: 20px;">
        <a href="index.php" style="color: #0066cc; text-decoration: none;">◀ 返回新闻列表</a>
    </p>
</body>
</html>