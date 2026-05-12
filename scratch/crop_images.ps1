
Add-Type -AssemblyName System.Drawing

$sourceFile = "C:\Users\davi\Downloads\ChatGPT Image 12 de mai. de 2026, 15_46_17.png"
$outputDir = "C:\Users\davi\Downloads\Davi-Portfolio\Davi-Portfolio\artifacts\portfolio\public\projects"

if (-not (Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir -Force
}

$img = [System.Drawing.Image]::FromFile($sourceFile)
$width = $img.Width
$height = $img.Height

$cellWidth = [int]($width / 3)
$cellHeight = [int]($height / 2)

$names = @(
    "divina-barbearia.png", "clinic-vet.png", "cinvet.png",
    "dental-clinic.png", "oral-vitta.png", "oss-barbeiros.png"
)

for ($row = 0; $row -lt 2; $row++) {
    for ($col = 0; $col -lt 3; $col++) {
        $index = $row * 3 + $col
        $rect = New-Object System.Drawing.Rectangle ($col * $cellWidth), ($row * $cellHeight), $cellWidth, $cellHeight
        $bmp = New-Object System.Drawing.Bitmap $cellWidth, $cellHeight
        $g = [System.Drawing.Graphics]::FromImage($bmp)
        $g.DrawImage($img, (New-Object System.Drawing.Rectangle 0, 0, $cellWidth, $cellHeight), $rect, [System.Drawing.GraphicsUnit]::Pixel)
        
        $outputPath = Join-Path $outputDir $names[$index]
        $bmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
        
        $g.Dispose()
        $bmp.Dispose()
        Write-Host "Saved: $($names[$index])"
    }
}

$img.Dispose()
